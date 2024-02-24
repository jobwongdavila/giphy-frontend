import React, { useState } from 'react';
import './App.css';
import { Box, Button, Grid, Input } from '@mui/material';
import search from './search';

function App(): React.ReactElement {
  const [query, setQuery] = useState('');
  const [previewList, setPreviewList] = useState<string[]>([]);

  const onQueryChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const doSearch = async (): Promise<void> => {
    const data = await search(query);

    const list = data.map((gif: { preview: string }) => gif.preview);

    setPreviewList(list);
  };

  return (
    <Box>
      <Box>
        <Input type="text" value={query} onChange={onQueryChanged} />
        <Button onClick={doSearch}>Search</Button>
      </Box>
      <Box>
        <Grid>
          {previewList.map((previewUrl, i) => (
            <img key={i} src={previewUrl} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
