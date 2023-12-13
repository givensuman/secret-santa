import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import config from "./particles_config.json";

const Snow = () => {
    const [ _, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
      <Particles
        id="tsparticles"
        className="z-0 bg-transparent"
        // @ts-ignore
        options={config}
      />
    );
};

export default Snow