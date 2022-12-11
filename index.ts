// type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };
interface Config {
	protocol: 'http' | 'https';
	port: 3000 | 3001;
	log: (msg: string) => void;
}
// type Role = {
// 	role: string;
// };

// type ConfigWithRole = Config & Role;

interface Role {
	role: string;
}

interface ConfigWithRole extends Config, Role {}

const serverConfig: ConfigWithRole = {
	protocol: 'https',
	port: 3001,
	role: 'admin',
	log: (msg: string): void => console.log(msg),
};

// const backupConfig: ConfigWithRole = {
// 	protocol: 'http',
// 	port: 3000,
// 	role: 'sysadmin',
// };

type StartFunction = (
	protocol: 'http' | 'https',
	port: 3000 | 3001,
	log: (msg: string) => void
) => string;

const startServer: StartFunction = (
	protocol: 'http' | 'https',
	port: 3000 | 3001,
	log: (msg: string) => void
): 'Server started' => {
	log(`Server started on ${protocol}://server:${port}`);

	return 'Server started';
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

interface Styles {
	[key: string]: string;
}

const styles: Styles = {
	position: 'absolute',
	top: '20px',
	left: '50px',
};
