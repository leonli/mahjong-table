import React from "react";
import { FormGroup, InputGroup, Card, Elevation } from "@blueprintjs/core";
import styles from "./BasicForm.module.scss";

const BasicForm: React.FC = () => {
  return (
    <div>
      <h1>Cluster Parameters</h1>
      <Card
        interactive={true}
        elevation={Elevation.ONE}
        className={styles.formMargin}
      >
        <FormGroup
          // helperText="Helper text with details..."
          label="Cluster Name"
          labelFor="cluster-name"
          labelInfo="(required)"
        >
          <InputGroup
            id="cluster-name"
            placeholder="Please enter your cluster name"
          />
        </FormGroup>
        <FormGroup
          // helperText="Helper text with details..."
          label="Node Instance Type"
          labelFor="node-type"
        >
          <div className="bp3-select bp3-fill .modifier" id="node-type">
            <select>
              <option selected>m5a.large</option>
              <option value="1">m5a.xlarge</option>
              <option value="2">m5a.2xlarge</option>
              <option value="3">m5a.4xlarge</option>
              <option value="4">m5a.8xlarge</option>
            </select>
          </div>
          <div className="bp3-select bp3-fill .modifier" id="node-type">
            <select>
              <option selected>Select instance type</option>
              <option value="1">m5a.xlarge</option>
              <option value="2">m5a.2xlarge</option>
              <option value="3">m5a.4xlarge</option>
              <option value="4">m5a.8xlarge</option>
            </select>
          </div>
        </FormGroup>
      </Card>
    </div>
  );
};
export default BasicForm;
