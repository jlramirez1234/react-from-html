import "./Table.css";

function Table() {
  return (
    <>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          <tr class="dark">
            <td>Alfonse Elrich</td>
            <td>Being Loveable, Alchemy</td>
            <td>110</td>
          </tr>
          <tr class="light">
            <td>Edward Elrich "Full Metal Alchemist"</td>
            <td>Alchemy, Human Transmutation</td>
            <td>100</td>
          </tr>
          <tr class="dark">
            <td>Hawkeye</td>
            <td>Sniper, Loyal AF</td>
            <td>95</td>
          </tr>
          <tr class="light">
            <td>Mj. Armstrong</td>
            <td>Alchemy, Muscles</td>
            <td>94</td>
          </tr>
          <tr class="dark">
            <td>Nina</td>
            <td>Loving Dogs, being adorable</td>
            <td>93</td>
          </tr>
        </table>
      </section>
    </>
  );
}

export default Table
