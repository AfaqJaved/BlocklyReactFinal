import "../toolbox.css";
import { BLOCKLY_CATEGORIES_CONSTANTS } from "../../../../utils/blocklyCategories";

export const INITIAL_TOOLBOX_JSON_EN = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: BLOCKLY_CATEGORIES_CONSTANTS.EN_SMARTY,
      cssConfig: {
        container: "p-4  flex flex-col text-center text-white",
        row: "smartyIcon rounded-xl text-white  shadow-lg font-sans",
        label: " font-sas text-lg text-white",
        icon: "customicon w-20 h-16",
      },
      contents: [
        {
          kind: "block",
          type: "direction_en",
        },
        {
          kind: "block",
          type: "start_block_en",
        },
        {
          kind: "block",
          type: "rotation_block_en",
        },
        // {
        //   kind: "block",
        //   type: "direction_steps",
        // },
        {
          kind: "block",
          type: "getdistance_en",
        },
      ],
    },
    {
      kind: "category",
      name: BLOCKLY_CATEGORIES_CONSTANTS.EN_LOGIC,
      cssConfig: {
        container: "p-4 flex flex-col text-center text-white",
        row: " logicIcon rounded-xl text-white  shadow-lg font-sans",
        label: "mt-5 font-sas text-lg text-white ",
        icon: "customicon w-20 h-16",
      },
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },

        {
          kind: "block",
          blockxml:
            '<block type="logic_compare"><field name="OP">EQ</field></block>',
        },
        {
          kind: "block",
          blockxml:
            '<block type="logic_operation"><field name="OP">AND</field></block>',
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          blockxml:
            '<block type="logic_boolean"><field name="BOOL">TRUE</field></block>',
        },
        {
          kind: "block",
          type: "logic_null",
        },
        {
          kind: "block",
          type: "logic_ternary",
        },
      ],
    },

    {
      kind: "category",
      name: BLOCKLY_CATEGORIES_CONSTANTS.EN_LOOPS,
      cssConfig: {
        container: "p-4 flex flex-col text-center text-white",
        row: "loopsIcon smarty rounded-xl text-white  shadow-lg font-sans",
        label: "mt-5 font-sas text-lg text-white ",
        icon: "customicon w-20 h-16",
      },
      contents: [
        {
          kind: "block",
          blockxml:
            '<block type="controls_repeat_ext">\n' +
            '      <value name="TIMES">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">10</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="controls_whileUntil">\n' +
            '      <field name="MODE">WHILE</field>\n' +
            "    </block>",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="controls_for">\n' +
            '      <field name="VAR" id="C(8;cYCF}~vSgkxzJ+{O" variabletype="">i</field>\n' +
            '      <value name="FROM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="TO">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">10</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="BY">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="controls_forEach">\n' +
            '      <field name="VAR" id="Cg!CSk/ZJo2XQN3=VVrz" variabletype="">j</field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="controls_flow_statements">\n' +
            '      <field name="FLOW">BREAK</field>\n' +
            "    </block>\n",
        },
      ],
    },
    {
      kind: "category",
      name: BLOCKLY_CATEGORIES_CONSTANTS.EN_MATH,
      cssConfig: {
        container: "p-4 flex flex-col text-center text-white",
        row: " mathIcon smarty rounded-xl text-white  shadow-lg font-sans",
        label: " mt-5 font-sas text-lg text-white ",
        icon: "customicon w-20 h-16",
      },
      contents: [
        {
          kind: "block",
          blockxml:
            '    <block type="math_round">\n' +
            '      <field name="OP">ROUND</field>\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">3.1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_number">\n' +
            '      <field name="NUM">0</field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_single">\n' +
            '      <field name="OP">ROOT</field>\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">9</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_trig">\n' +
            '      <field name="OP">SIN</field>\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">45</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_constant">\n' +
            '      <field name="CONSTANT">PI</field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_number_property">\n' +
            '      <mutation divisor_input="false"></mutation>\n' +
            '      <field name="PROPERTY">EVEN</field>\n' +
            '      <value name="NUMBER_TO_CHECK">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_arithmetic">\n' +
            '      <field name="OP">ADD</field>\n' +
            '      <value name="A">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="B">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_on_list">\n' +
            '      <mutation op="SUM"></mutation>\n' +
            '      <field name="OP">SUM</field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_modulo">\n' +
            '      <value name="DIVIDEND">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">64</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="DIVISOR">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">10</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_constrain">\n' +
            '      <value name="VALUE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">50</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="LOW">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="HIGH">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">100</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_random_int">\n' +
            '      <value name="FROM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="TO">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">100</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          type: "math_random_float",
        },
      ],
    },
    {
      kind: "category",
      name: BLOCKLY_CATEGORIES_CONSTANTS.EN_TEXT,
      cssConfig: {
        container: "p-4 flex flex-col text-center text-white",
        row: " textIcon smarty rounded-xl text-white  shadow-lg font-sans",
        label: " mt-5 font-sas text-lg text-white ",
        icon: "customicon w-20 h-16",
      },
      contents: [
        {
          kind: "block",
          blockxml:
            '    <block type="text_charAt">\n' +
            '      <mutation at="true"></mutation>\n' +
            '      <field name="WHERE">FROM_START</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text">\n' +
            '      <field name="TEXT"></field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_append">\n' +
            '      <field name="VAR" id=":};P,s[*|I8+L^-.EbRi" variabletype="">item</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_length">\n' +
            '      <value name="VALUE">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_isEmpty">\n' +
            '      <value name="VALUE">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_indexOf">\n' +
            '      <field name="END">FIRST</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            '      <value name="FIND">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_join">\n' +
            '      <mutation items="2"></mutation>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_getSubstring">\n' +
            '      <mutation at1="true" at2="true"></mutation>\n' +
            '      <field name="WHERE1">FROM_START</field>\n' +
            '      <field name="WHERE2">FROM_START</field>\n' +
            '      <value name="STRING">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_changeCase">\n' +
            '      <field name="CASE">UPPERCASE</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_trim">\n' +
            '      <field name="MODE">BOTH</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_print">\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_prompt_ext">\n' +
            '      <mutation type="TEXT"></mutation>\n' +
            '      <field name="TYPE">TEXT</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
      ],
    },
    {
      kind: "category",
      name: BLOCKLY_CATEGORIES_CONSTANTS.EN_LISTS,
      cssConfig: {
        container: "p-4 flex flex-col text-center text-white",
        row: "listIcon smarty rounded-xl text-white  shadow-lg font-sans",
        label: " mt-5 font-sas text-lg text-white ",
        icon: "customicon w-20 h-16",
      },
      contents: [
        {
          kind: "block",
          blockxml:
            '    <block type="lists_indexOf">\n' +
            '      <field name="END">FIRST</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_create_with">\n' +
            '      <mutation items="0"></mutation>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_repeat">\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">5</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          type: "lists_length",
        },
        {
          kind: "block",
          type: "lists_isEmpty",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_create_with">\n' +
            '      <mutation items="3"></mutation>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_getIndex">\n' +
            '      <mutation statement="false" at="true"></mutation>\n' +
            '      <field name="MODE">GET</field>\n' +
            '      <field name="WHERE">FROM_START</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_setIndex">\n' +
            '      <mutation at="true"></mutation>\n' +
            '      <field name="MODE">SET</field>\n' +
            '      <field name="WHERE">FROM_START</field>\n' +
            '      <value name="LIST">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_getSublist">\n' +
            '      <mutation at1="true" at2="true"></mutation>\n' +
            '      <field name="WHERE1">FROM_START</field>\n' +
            '      <field name="WHERE2">FROM_START</field>\n' +
            '      <value name="LIST">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_split">\n' +
            '      <mutation mode="SPLIT"></mutation>\n' +
            '      <field name="MODE">SPLIT</field>\n' +
            '      <value name="DELIM">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">,</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_sort">\n' +
            '      <field name="TYPE">NUMERIC</field>\n' +
            '      <field name="DIRECTION">1</field>\n' +
            "    </block>\n",
        },
      ],
    },
    {
      kind: "category",
      name: BLOCKLY_CATEGORIES_CONSTANTS.EN_COLOUR,
      cssConfig: {
        container: "p-4 flex flex-col text-center text-white",
        row: " colorIcon smarty rounded-xl text-white  shadow-lg font-sans",
        label: " mt-5 font-sas text-lg text-white ",
        icon: "customicon w-20 h-16",
      },
      contents: [
        {
          kind: "block",
          blockxml:
            '    <block type="colour_picker">\n' +
            '      <field name="COLOUR">#ff0000</field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          type: "colour_random",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="colour_rgb">\n' +
            '      <value name="RED">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">100</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="GREEN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">50</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="BLUE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="colour_blend">\n' +
            '      <value name="COLOUR1">\n' +
            '        <shadow type="colour_picker">\n' +
            '          <field name="COLOUR">#ff0000</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="COLOUR2">\n' +
            '        <shadow type="colour_picker">\n' +
            '          <field name="COLOUR">#3333ff</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="RATIO">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">0.5</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
      ],
    },
    // { kind: "sep" },
    {
      kind: "category",
      name: BLOCKLY_CATEGORIES_CONSTANTS.EN_FUNCTIONS,
      custom: "PROCEDURE",
      cssConfig: {
        container: "p-4 flex flex-col text-center text-white",
        row: "functionIcon smarty rounded-xl text-white  shadow-lg font-sans",
        label: " mt-5 font-sas text-lg text-white ",
        icon: "customicon w-20 h-16",
      },
    },
  ],
};

export const test = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logic",
      cssConfig: {
        container: "p-4 flex flex-col text-center text-white",
        row: " logicIcon rounded-xl text-white  shadow-lg font-sans",
        label: "mt-5 font-sas text-lg text-white ",
        icon: "customicon w-20 h-16",
      },
      contents: [],
    },
  ],
};
