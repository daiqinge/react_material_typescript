import { Grid } from '@material-ui/core';
import {
  Button,
  CustomInput,
  ItemGrid,
  RegularCard,
} from 'components';
import * as React from 'react';

const AddUser: React.SFC = () => (
  <div>
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          content={
            <div>
              <Grid container >
                <ItemGrid xs={12} sm={12} md={2} />
                <ItemGrid xs={12} sm={12} md={2} ><h5>Contact Info</h5></ItemGrid>
                <ItemGrid xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={1} />
                <ItemGrid xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </ItemGrid>
              </Grid>
              <Grid container>
              <ItemGrid xs={12} sm={12} md={4} />
              <ItemGrid xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Contact phone"
                      id="contact-phone"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </ItemGrid>
              </Grid>
              <Grid container>
              <ItemGrid xs={12} sm={12} md={4} />
                  <ItemGrid xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </ItemGrid>
              </Grid>
              <Grid container>
              <ItemGrid xs={12} sm={12} md={2} />
              <ItemGrid xs={12} sm={12} md={2} ><h5>Address</h5></ItemGrid>
                <ItemGrid xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Address Details"
                    id="detail"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </ItemGrid>
              </Grid>
              <Grid container>
              <ItemGrid xs={12} sm={12} md={4} />
                <ItemGrid xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={1} />
                <ItemGrid xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </ItemGrid>
              </Grid>
              <Grid container>
              <ItemGrid xs={12} sm={12} md={4} />
                <ItemGrid xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </ItemGrid>
              <ItemGrid xs={12} sm={12} md={1} />
                <ItemGrid xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="State/Province"
                    id="state-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </ItemGrid>
              </Grid>
            </div>
          }
          footer={<div>
            <Button color="rose">Cancel</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="blue">Save</Button>
          </div>
        }
        />
      </ItemGrid>
    </Grid>
  </div>
);

export default AddUser;
