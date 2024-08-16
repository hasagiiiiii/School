import React from "react";
import { debounce } from "lodash";
import { Avatar, Select, Spin } from "antd";
// Function Update ....
const DebounceSelect = ({ fetchOption, dbTimeout = 800, ...props }) => {
  const [fetching, setFetching] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const debounceFetcher = React.useMemo(() => {
    const loadOption = (value) => {
      setOptions([]);
      setFetching(true); // loading = true

      fetchOption(value).then((newOption) => {
        setOptions(newOption);
        setFetching(false);
      });
    };
    return debounce(loadOption, dbTimeout);
  }, [fetchOption, dbTimeout]);

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
    >
      {options.map((opt) => (
        <Select.Option key={opt.value} title={opt.label} value={opt.value}>
          <Avatar src={opt.photoURL}>
            {opt.photoURL ? "" : opt.label?.charAt(0).toUpperCase()}
          </Avatar>
          {`${opt.label}`}
        </Select.Option>
      ))}
    </Select>
  );
};

// const fetchUserList = async (valueSearch, currentTeacher) => {
//   const [dataTest, setDataTest] = React.useState([]);

//   const FillterSearch = dataTest.filter((item) =>
//     item.displayName.includes(valueSearch)
//   ); // Fillter Search xem có người dùng nào giống không

//   FillterSearch.map((test) => ({
//     label: test.displayName,
//     value: test.uid,
//     photoURL: test.photoURL,
//   })).filter((item) => item.includes(currentTeacher)); // Map arr có người dùng giống với yêu cầu trong state ra và lọc tránh trùng vói người đã có trong lớp
// };

// const DebounceSelected = () => {
//   const [valueUpdate, setValueUpdate] = React.useState([]);
//   return (
//     <DebounceSelect
//       mode="multiple"
//       label="Thành viên cần thêm"
//       value={valueUpdate}
//       fetchOption={fetchUserList}
//       onChange={(newValue) => setValueUpdate(newValue)}
//       currentMember={currentMember} // user đã có trong class
//     />
//   );
// };

export {DebounceSelect};
