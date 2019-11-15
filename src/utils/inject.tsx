import styled from 'styled-components';

import { Row, Col, Typography, Icon, Button, Dropdown, Steps, Card, Spin, Progress, Avatar } from 'antd';
import { Select, DatePicker, TimePicker, Input, Slider, Rate } from 'formik-antd';

const { Text, Title, Paragraph } = Typography;

export function injectAntIntoStyledComponents() {
	// @ts-ignore
	Button.defaultProps.type = 'primary';

	// General
	styled.Button = styled(Button);
	styled.Icon = styled(Icon);

	// Typography
	styled.Title = styled(Title);
	styled.Text = styled(Text);
	styled.Paragraph = styled(Paragraph);

	// Layout
	styled.Row = styled(Row);
	styled.Col = styled(Col);

	// Navigation
	styled.Dropdown = styled(Dropdown);
	styled.Steps = styled(Steps);
	styled.Step = styled(Steps.Step);

	// Data Entry
	styled.Input = styled(Input);
	styled.Slider = styled(Slider);
	styled.Slider = styled(Rate);

	styled.Select = styled(Select);
	styled.Option = styled(Select.Option);

	styled.DatePicker = styled(DatePicker);
	styled.TimePicker = styled(TimePicker);

	// Data Display
	styled.Avatar = styled(Avatar);
	styled.Card = styled(Card);

	// Feedback
	styled.Spin = styled(Spin);
	styled.Progress = styled(Progress);

	// Will continue this list after demand
}
