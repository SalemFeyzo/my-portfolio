<script lang="ts">
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Button, { Label } from '@smui/button';
	import Select, { Option } from '@smui/select';
	import { theme } from '$lib/stores';

	let open = false;
	let th = ['system', 'light', 'dark'];
</script>

<Select bind:value={$theme} label="Select Theme">
	<Option value="system">System</Option>
	<Option value="light">Light</Option>
	<Option value="dark">Dark</Option>
</Select>
