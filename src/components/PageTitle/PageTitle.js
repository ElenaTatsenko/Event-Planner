import {Text} from "./PageTitle.styled";

const PageTitle = ({text}) => {
// eslint-disable-next-line jsx-a11y/heading-has-content
return <Text className ='title'>{text}</Text>;
}

export default PageTitle