import { useState, useEffect } from 'react';
import { CRUDUserService } from 'API';

import AdminModalButton from './AdminModalButton';
import AdminTable from './AdminTable';
import AdminChangeTable from './AdminChangeTable';
import AdminModal from './AdminModal';

import { PARTICIPATE_NAME } from 'Utils/constants';

const AdminContainer = ({ auth, username, isOpen, setIsOpen }) => {
  const [selectusername, setSelectusername] = useState(null);

  const [tab, setTab] = useState(0);
  const [rowData, setRowData] = useState(null);
  const [selectRowData, setSelectRowData] = useState(null);

  const updateSelectRowData = (curArrays, curTab) => {
    const filterArray = [];
    let filter = '';
    if (curTab === 1) filter = PARTICIPATE_NAME.NOT_PARTICIPATED;
    else if (curTab === 2) filter = PARTICIPATE_NAME.PARTICIPATED;
    curArrays.map(array => {
      if (array.attendance !== filter) filterArray.push(array);
    });

    setSelectRowData(filterArray);
  };

  const getUser = async () => {
    const result = await CRUDUserService.getAllUser();
    setRowData(result);
    updateSelectRowData(result, tab);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (rowData === null) return;
    rowData.filter(data => {
      if (data.username === selectusername && data?.role === 'ROLE_ADMIN') {
        alert('admin의 정보는 변경할 수 없습니다!');
        setSelectusername(null);
      }
    });
  }, [selectusername]);

  return (
    <>
      <AdminModalButton setIsOpen={setIsOpen} />
      <AdminTable
        tab={tab}
        setTab={setTab}
        rowData={rowData}
        updateSelectRowData={updateSelectRowData}
        selectRowData={selectRowData}
        setSelectusername={setSelectusername}
      />

      <AdminChangeTable
        rowData={rowData}
        selectusername={selectusername}
        setSelectusername={setSelectusername}
        getUser={getUser}
        username={username}
        auth={auth}
      />
      <AdminModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        rowData={rowData}
        getUser={getUser}
        setSelectusername={setSelectusername}
      />
    </>
  );
};
export default AdminContainer;
