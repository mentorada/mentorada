import React from 'react';
import { Form, FormGroup } from 'reactstrap';

export default class FilterTerm extends React.Component {
  render () {
    const { filterVal, filterUpdate } = this.props;
    return(
      <Form>
        <FormGroup>
          <span class="fa fa-search"></span>
          <input
            className="form-control"
            type="text"
            ref={(c) => { this.filterInput = c; }}
            placeholder="Filtrar por área, nível ou tecnologia..."
            value={filterVal}
            onChange={() => {
              filterUpdate(this.filterInput.value);
            }}
          />
        </FormGroup>
      </Form>
    )
  }
}
