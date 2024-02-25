import { useState, useContext, useEffect } from 'react';
import { useQueryClient } from 'react-query';

import { AuthContext } from 'Store';
import { isWrongAccess } from 'Utils';
import { CusDatePicker } from 'Components';
import { useTable } from 'Hooks/dayTable';

import { TEAM_NAME, TEAM_ID, ERROR_MESSAGES, CHECK_IN } from 'Utils/constants';
import { AllTableService } from 'API';

import WrongDay from './WrongDay';
import MainPageTable from './MainPageTable';
import MainPageTableTabs from './MainPageTableTabs';
import FilterModal from './FilterModal';

import styled from 'styled-components';
import { format } from 'date-fns';

const MainPage = () => {
  const [date, setDate] = useState(new Date());
  const [tab, setTab] = useState(0);
  const [selectRowData, setSelectRowData] = useState(null);
  const [customData, setCustomData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const auth = useContext(AuthContext);
  const role = auth.status?.role;

  const { status: stat, data: rowData } = useTable(date);

  const client = useQueryClient();

  const updateSelectData = curTab => {
    // 마운트 되었을 때 updateSelectData 함수를 호출한 시점에서
    // useState의 비동기 호출 때문에 rowData에는 null이 들어가 있다.
    // 부득이 하게 중복된 코드를 useEffect로 호출되는 getUsers에 넣어서
    // 마운트 되는 시점에 한해서만 API로 받아온 데이터를 집어넣게 했다.

    if (curTab === TEAM_ID.ALL) setSelectRowData(rowData);
    else {
      const team = curTab === TEAM_ID.BLUE ? TEAM_NAME.BLUE : TEAM_NAME.RED;

      setSelectRowData(
        rowData.filter(data => {
          return data.team === team;
        }),
      );
    }
  };

  const handleChangeTab = (event, dstTab) => {
    setTab(dstTab);
    updateSelectData(dstTab);
  };

  const handleClickToggleCustom = dst => {
    switch (dst) {
      case '팀':
        customData[0] = !customData[0];
        break;
      case '역할':
        customData[1] = !customData[1];
        break;
      case '출석':
        customData[3] = !customData[3];
        break;
      case '결석':
        customData[4] = !customData[4];
        break;
      case '휴가':
        customData[5] = !customData[5];
        break;
      case '목표':
        customData[8] = !customData[8];
        break;
      default:
    }
    const newArray = [...customData];
    // 분해 할당하지 않으면 얕은 복사이기에 state가 변경되지 않음
    setCustomData(newArray);
    localStorage.setItem('customData', JSON.stringify(newArray));
  };

  const getUsers = () => {
    if (stat === 'loading') {
      setSelectRowData(null);
      return;
    }

    const newArray = rowData.map((item, i) => {
      item.id = i + 1;
      return item;
    });

    if (tab === TEAM_ID.ALL) setSelectRowData(newArray);
    else {
      const team = tab === TEAM_ID.BLUE ? TEAM_NAME.BLUE : TEAM_NAME.RED;
      setSelectRowData(
        newArray.filter(data => {
          return data.team === team;
        }),
      );
    }
  };

  const handleChangeAllCheck = async (select, value) => {
    if (isWrongAccess(role)) {
      alert('수정 권한이 없습니다.');
      return;
    }

    // selectRowData.map의 모든 객체 요소들이 API 요청을 보내기 때문에,
    await Promise.all(
      selectRowData.map(async user => {
        if (select === CHECK_IN) {
          return AllTableService.putTableCheckIn(
            user.username,
            format(date, 'yyyyMMdd'),
            value,
          );
        } else {
          return AllTableService.putTableCheckOut(
            user.username,
            format(date, 'yyyyMMdd'),
            value,
          );
        }
      }),
    );
    refresh();
  };

  const handleChangePrev = async (prevData, prevSelect) => {
    let value;

    if (isWrongAccess(role)) {
      alert('수정 권한이 없습니다.');
      return;
    }

    await Promise.all(
      prevData.map(async user => {
        value = prevSelect === 'checkIn' ? user.checkIn : user.checkOut;

        if (prevSelect === CHECK_IN) {
          return AllTableService.putTableCheckIn(
            user.username,
            format(date, 'yyyyMMdd'),
            value,
          );
        } else {
          return AllTableService.putTableCheckOut(
            user.username,
            format(date, 'yyyyMMdd'),
            value,
          );
        }
      }),
    );
    refresh();
  };

  useEffect(() => {
    getUsers();
  }, [rowData, date]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('customData'));
    setCustomData(localData ? localData : new Array(9).fill(true));
    // 전체 칼럼의 true, false 만을 저장하고 필터링은 MainPageTable에서 진행한다.
  }, []);

  const refresh = () => {
    console.log('refresh');
    const dateFormat = format(date, 'yyyyMMdd');
    client.invalidateQueries(['dayTable', dateFormat]);
  };

  return (
    <MainPageContainer>
      {selectRowData ? (
        <>
          <MainHeader>
            <CusDatePicker date={date} setDate={setDate} filterWeekend={true} />
          </MainHeader>

          <MainPageTableTabs
            selectRowData={selectRowData}
            date={date}
            tab={tab}
            handleChangeTab={handleChangeTab}
            setIsOpen={setIsOpen}
            handleChangeAllCheck={handleChangeAllCheck}
            handleChangePrev={handleChangePrev}
          />
          <MainPageTable
            date={date}
            selectRowData={selectRowData}
            customData={customData}
            refresh={refresh}
          />
        </>
      ) : (
        <>
          <MainHeader>
            <CusDatePicker date={date} setDate={setDate} />
          </MainHeader>
          <WrongDay wrongType={ERROR_MESSAGES.NO_DATA} />
        </>
      )}
      {isOpen && (
        <FilterModal
          customData={customData}
          onClickToggleCustom={handleClickToggleCustom}
          setIsOpen={setIsOpen}
        />
      )}
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  box-sizing: border-box;
  padding: 10px 50px 0px 50px;

  display: flex;
  flex-direction: column;
  margin: auto;
`;

const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  margin: 10px;
`;
