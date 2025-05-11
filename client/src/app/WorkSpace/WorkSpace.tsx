import { Grid, Paper } from "@mantine/core";

export function WorkSpace() {

    const controlItems = [
        '1dfdfdfdf', '2dfdfdfd', '3dfdfdfdf'
    ]

    return (
        <Grid>
            {controlItems.map(item => 
                <Grid.Col span={4} key={item}>
                    <Paper shadow="xs" p="xl">
                        {item}
                    </Paper>
                </Grid.Col>)}
        </Grid>
    )
}