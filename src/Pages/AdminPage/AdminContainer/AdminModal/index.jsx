import ModalAttendLeaderboard from './ModalAttendLeaderboard';
import ModalShakeTeam from './ModalShakeTeam';
import ModalAdminGuide from './ModalAdminGuide';

const AdminModal = ({ setIsOpen, isOpen, rowData, getUser, changeTable }) => {
  const attendUser = rowData?.filter(user => user.attendance === '참가');
  return (
    <>
      {isOpen === 'find' && (
        <ModalAttendLeaderboard setIsOpen={setIsOpen} attendUser={attendUser} />
      )}
      {isOpen === 'shake' && (
        <ModalShakeTeam
          setIsOpen={setIsOpen}
          attendUser={attendUser}
          getUser={getUser}
          changeTable={changeTable}
        />
      )}
      {isOpen === 'todo' && (
        // TODO: 모달 클릭 후 onKeyDown이 안먹힘(ESC)
        <ModalAdminGuide setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default AdminModal;
