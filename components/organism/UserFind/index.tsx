import React from 'react';

const UserFind: React.FC = () => {
  const users = [
    {
      name: 'tentacool',
      rate: 90,
      type: 'water',
      iconPath: '/image/tentacool.png',
    },
    {
      name: 'krabby',
      rate: 40,
      type: 'water',
      iconPath: '/image/krabby.png',
    },
    {
      name: 'kingler',
      rate: 3,
      type: 'water',
      iconPath: '/image/kingler.png',
    },
    {
      name: 'magicarp',
      rate: 80,
      type: 'water',
      iconPath: '/image/magicarp.png',
    },
    {
      name: 'horsea',
      rate: 30,
      type: 'water',
      iconPath: '/image/horsea.png',
    },
    {
      name: 'seadra',
      rate: 4,
      type: 'water',
      iconPath: '/image/seadra.png',
    },
    {
      name: 'shellder',
      rate: 35,
      type: 'water',
      iconPath: '/image/shellder.png',
    },
    {
      name: 'gyarados',
      rate: 45,
      type: 'water',
      iconPath: '/image/gyarados.png',
    },
    {
      name: 'psyduck',
      rate: 40,
      type: 'water',
      iconPath: '/image/psyduck.png',
    },
    {
      name: 'slowpoke',
      rate: 1,
      type: 'water',
      iconPath: '/image/slowpoke.png',
    },
    {
      name: 'staryu',
      rate: 35,
      type: 'water',
      iconPath: '/image/staryu.png',
    },
  ];
  const [userList, setUserList] = React.useState<
    { name: string; rate: number; type: string, iconPath: string}[] | undefined
  >(users);
  const [text, setText] = React.useState<string>('');

  const handleOnClick = () => {
    const findUsers =
      userList && userList?.length > 0
        ? userList?.filter((u) => u?.name === text)
        : undefined;

    console.log(findUsers);

    setUserList(findUsers);
  };

  return (
    <div>
      <div className="title">
        <h1>POKEDEX</h1>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setUserList(users);
          }}
        />
        <button disabled={!text} onClick={handleOnClick}>
          Search
        </button>
      </div>

      <div className="body">
        {userList && userList?.length === 0 && (
          <div className="notFound">No User Found</div>
        )}

        {userList &&
          userList?.length > 0 &&
          userList?.map((user) => {
            return (
              <div className="body__item">
                <h3>Name: {user?.name}</h3>
                <p>Rate(%): {user?.rate}</p>
                <p>Type: {user?.type}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserFind;