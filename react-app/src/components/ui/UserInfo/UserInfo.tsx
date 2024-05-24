interface IUserInfo {
    fullName: string;
    roles: Array<string>;
  }
  
  const UserInfo = ({ fullName, roles }: IUserInfo) => {
    return (
      <div className="mt-auto p-5">
        <div className="flex space-x-2 mb-4">
          {roles.map((role: string) => {
            return (
              <span className="bg-gray-300 px-2 py-1 rounded text-sm">
                {role}
              </span>
            );
          })}
        </div>
        <div className="text-sm">{fullName}</div>
      </div>
    );
  };
  
  export default UserInfo;
  