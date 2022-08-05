import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Gifportal } from "../target/types/gifportal";

describe("gifportal", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Gifportal as Program<Gifportal>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
