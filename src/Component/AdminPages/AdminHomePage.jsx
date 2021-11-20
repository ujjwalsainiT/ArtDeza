import React from 'react'
import { Grid, Card } from '@material-ui/core';
import AdminHOC from "../../Common/AdminHOC.jsx";
import "./Adminpages.css"
function AdminHomePage() {
    return (
        <>
            <div className="data_Padding_after_login pb-5">
                <Card className="Card_shadow  m-2 p-2">
                    <div className="mt-2 mb-2">
                        <Grid className="Component_main_grid">
                            <Grid item md={3} className="p-3">
                                <Card className="p-5 text-center Card_shadow card_color">
                                    <div><strong> <i class="fa fa-plus mr-2" />Add Video</strong></div>
                                </Card>
                            </Grid>

                        </Grid>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default AdminHOC(AdminHomePage)
