import * as React from "react";
import {
  ChoiceGroup,
  IChoiceGroupOption
} from "office-ui-fabric-react/lib/ChoiceGroup";

/**
 * Interface for ChoiceGroupImageExample state.
 */
export interface IChoiceGroupImageExampleState {
  selectedKey: string;
}

interface IProps {}

export class ChoiceGroupImageExample extends React.Component<
  IProps,
  IChoiceGroupImageExampleState
> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      selectedKey: "bar"
    };

    this._onImageChoiceGroupChange = this._onImageChoiceGroupChange.bind(this);
  }

  private _onImageChoiceGroupChange(
    ev: React.SyntheticEvent<HTMLElement>,
    option: IChoiceGroupOption
  ): void {
    this.setState({
      selectedKey: option.key
    });
  }

  public render() {
    const { selectedKey } = this.state;

    return (
      <div>
        <ChoiceGroup
          label="Pick one image"
          selectedKey={selectedKey}
          options={[
            {
              key: "bar",
              imageAlt: "Bar chart icon",
              imageSize: { width: 32, height: 32 },
              text: "Clustered bar chart" // This text is long to show text wrapping.
            },
            {
              key: "pie",
              imageSize: { width: 32, height: 32 },
              text: "Pie chart"
            }
          ]}
          onChange={this._onImageChoiceGroupChange}
        />
      </div>
    );
  }
}

export default ChoiceGroupImageExample;
