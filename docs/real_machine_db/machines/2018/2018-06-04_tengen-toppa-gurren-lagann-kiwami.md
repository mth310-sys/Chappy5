# No.1198 パチスロ 天元突破グレンラガン極

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ 天元突破グレンラガン極
- alternateName: 天元突破グレンラガン極 / パチスロ天元突破グレンラガン極
- manufacturer: スパイキー（製造） / 七匠（開発）
- releaseDateCanonical: 2018-06-04
- generation: 5.9号機 / 5号機
- systemType: A+RT / ボーナス+RT
- formalModelName: `パチスロ天元突破グレンラガン極／SA`
- certificationNumber: `7S1387`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- PiDEA Xの2018-05-02業界記事で、フィールズがスパイキー製新機種として全国発売を発表し、導入（開店）日は2018-06-04予定と明記。
- K-Navi、HAZUSE、複数解析サイトでも2018-06-04で一致。
- 日刊スポーツの2018-05-25導入カレンダーでも6月4日パチスロ欄に掲載。
- canonicalはホール導入日として2018-06-04。

## performanceCore

### payoutRateBySetting
- setting1: 97.6%
- setting2: 98.8%
- setting3: 101.2%
- setting4: 106.2%
- setting5: 110.6%
- setting6: 114.1%

K-Navi、ちょんぼりすた、スロパチネットで一致。

### initialHitBySetting
BIG合算:
- setting1: 1/455
- setting2: 1/428
- setting3: 1/407
- setting4: 1/370
- setting5: 1/368
- setting6: 1/366

REG / ドリルボーナス:
- setting1: 1/874
- setting2: 1/874
- setting3: 1/874
- setting4: 1/762
- setting5: 1/546
- setting6: 1/362

ボーナス合算:
- setting1: 1/299
- setting2: 1/287
- setting3: 1/278
- setting4: 1/249
- setting5: 1/220
- setting6: 1/182

### baseGamesPer50
- 約34.4G～39.8G/50枚（設定1～6レンジ）。
- パチマガスロマガおよびちょんぼりすたで一致。
- 別資料に概算「約34G/50枚」表記があるが、設定レンジと定義矛盾ではないため精密レンジをcanonical採用。

### netIncrease
- RT「グレンラガンチャンス」: 約0.25枚/G。
- PiDEA X、P-WORLD、パチマガスロマガで約0.25枚/Gが一致。
- 一部解析は丸めて約0.3枚/Gと表記するため、丸め差として保持し競合扱いしない。

### basicPayout
- BIG「グレンラガンボーナス」: 平均約308枚。
- REG「ドリルボーナス」: 平均約71枚。
- ボーナス中の所定技術介入を実行すると、終了後に100G / 200G / 次回ボーナスまでのRTへ移行。

### ceiling
- 通常ゲーム数天井: 非搭載。

## modeSpecificMinimumData
- A+RT。全ボーナス後に技術介入を行うことでRTへ接続するHYPER RT仕様。
- RTは100G「グレンラガンチャンス」、200G「超グレンラガンチャンス」、次回ボーナスまでの「超銀河グレンラガンチャンス」の3系統。
- RT平均継続は約146Gとする解析資料あり。ボーナスとRTのループ率は設定1で約40%。
- RTゲーム数振り分けには設定差があるが、通常運用時の設定推測値でありresetBehavior固有値ではないため、物差し用の詳細全テーブルは本レコードでは省略。

## resetBehavior

### settingChangeBehavior
- 本機固有の設定変更時RT状態、成立済みボーナス状態、液晶開始ステージ、初期出目を直接示す信頼できる資料は確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 「天元突破グレンラガン極 / 型式SA / スパイキー / 七匠」と「設定変更 / リセット / 朝一 / RT状態 / 有利区間」を組み替えて再探索したが、当時解析の朝一リセット恩恵欄も「調査中」のまま。
- 一般的なA+RT機の挙動を本機固有契約として転記しない。

### carryOverBehavior
- 据え置き時のRT状態・成立済みボーナス状態・液晶状態を本機固有に直接比較した公開資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ONの一般論を据え置き契約として流用しない。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ON時のRT状態・成立済みボーナス状態・液晶状態を直接示す本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### gameCounterReset
- 通常ゲーム数天井: `NOT_APPLICABLE_NO_CEILING`。
- ゲーム数解除型ではないため、朝一の天井ゲーム数リセット/引継ぎという比較対象はない。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING`。

### modeAfterReset
- ゲーム数解除モード / 朝一専用天井モード: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- 設定変更専用のRTモード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- settingChange: `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycle: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### advantageousSectionReset
- 本機は5.9号機A+RTだが、本機固有の設定変更/据え置き/純電断に伴う有利区間状態やランプ挙動を示す公開資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- A+RTという分類だけから有利区間の有無・リセット契約を推測しない。

### resetBenefits
- 通常ゲーム数天井短縮: `NOT_APPLICABLE_NO_CEILING`。
- 朝一専用モード、設定変更専用の初当たり優遇、RTゲーム数優遇、公開恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ちょんぼりすたの朝一リセット恩恵欄は「調査中」。

### resetPenalties
- 設定変更時のみ発生する定量的な朝一不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、ランプ、液晶ステージ等による設定変更/据え置き判別契約は、表記揺れ・型式名・メーカー名を含む再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificRtDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- advantageousSectionOnSettingChange: `UNVERIFIED_AFTER_RESEARCH`
- advantageousSectionOnPowerCycle: `UNVERIFIED_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更専用のモード振り分け、朝一特定G以内当選率、短縮天井、リセット恩恵発生率などの比較可能な公開朝一数値は、十分な再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常のボーナス後RT振り分けには設定差があるが、reset固有値ではないため朝一数値として混同しない。

## conflicts
- `FORMAL_MODEL_NAME_SECONDARY_VARIANT`
  - HAZUSE: `パチスロ天元突破グレンラガン極／SA`、検定番号`7S1387`。
  - 一部二次資料: `パチスロ天元突破グレンラガンH` と表記。
  - 検定番号とセットで提示するHAZUSEの`／SA`をcanonical採用し、`H`表記は別資料表記として隔離。

## missingFields
- 設定変更時のRT/内部状態・開始ステージ・初期出目。
- 据え置き時を純電断と分離したRT/内部状態契約。
- 純電源OFF→ON時のRT/内部状態契約。
- 本機固有の有利区間/ランプ挙動。
- 本機固有ガックン等の変更判別要素と定量値。
- リセット固有の公開朝一数値。

## sources
取得日: 2026-09-10

1. PiDEA X — HYPER RTでループ期待大「グレンラガン極」／スパイキー
   - https://www.pidea.jp/articles/HYPER%20RT%E3%81%A7%E3%83%AB%E3%83%BC%E3%83%97%E6%9C%9F%E5%BE%85%E5%A4%A7%E3%80%8C%E3%82%B0%E3%83%AC%E3%83%B3%E3%83%A9%E3%82%AC%E3%83%B3%E6%A5%B5%E3%80%8D%EF%BC%8F%E3%82%B9%E3%83%91%E3%82%A4%E3%82%AD%E3%83%BC
   - 2018-05-02。フィールズ発表、製造スパイキー/開発七匠、A+RT、BIG約308枚、REG約71枚、RT純増約0.25枚/G、2018-06-04導入予定。
   - confidence: `INDUSTRY`
2. HAZUSE — パチスロ 天元突破グレンラガン極
   - https://hazuse.com/machine/pachislot/7S1387/
   - 導入2018-06-04、メーカー、型式`パチスロ天元突破グレンラガン極／SA`、検定番号`7S1387`、天井非搭載、RT仕様。
   - confidence: `ANALYSIS_HIGH`
3. K-Navi — パチスロ 天元突破グレンラガン極
   - https://p-kn.com/slot/3011/
   - 導入2018-06-04、BIG/REG/合算、機械割、A+RT仕様。
   - confidence: `ANALYSIS_HIGH`
4. パチマガスロマガ — 小役確率 / 50枚あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/10/c.php
   - 50枚あたり34.4G～39.8G。
   - confidence: `ANALYSIS_HIGH`
5. パチマガスロマガ — ゲーム性まるわかり解説
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/10/l.php
   - A+RT、RT100/200/次回ボーナス、純増約0.25枚/G。
   - confidence: `ANALYSIS_HIGH`
6. P-WORLD — パチスロ 天元突破グレンラガン極
   - https://www.p-world.co.jp/machine/database/8657
   - RT純増約0.25枚/G、BIG約308枚、REG約71枚、RT仕様。
   - confidence: `ANALYSIS_HIGH`
7. ちょんぼりすた — 天元突破グレンラガン極
   - https://chonborista.com/slot/spiky/56865/
   - 5.9号機A+RT、2018-06-04、34.4～39.8G/50枚、設定別ボーナス/機械割、天井非搭載。朝一リセット恩恵は「調査中」。
   - confidence: `ANALYSIS_HIGH`
8. 日刊スポーツ — パチンコ・パチスロ導入カレンダー
   - https://www.nikkansports.com/amusement/pachislot/news/201805250000665.html
   - 2018-05-25掲載。6月4日パチスロ欄に本機を掲載。同日群監査でシークレットハイビスカスも確認。
   - confidence: `INDUSTRY`
9. スロパチネット — 天元突破グレンラガン極
   - https://slopachi-net.com/post-1443
   - 2018-06-04、A+RT、BIG/REG/合算、出玉率、天井非搭載。一方で型式を`パチスロ天元突破グレンラガンH`と表記するため型式CONFLICT用。
   - confidence: `ANALYSIS_SINGLE`

## qualityNotes
- 性能コア主要値は業界記事+複数解析で照合済み。
- RT純増は0.25枚/Gをcanonicalとし、0.3枚/Gは丸め表記として扱う。
- resetBehaviorは本機固有の直接資料が乏しいため、一般論で補完せず欠損を明示。
- 2018-06-04群監査で、LATEST_HANDOFF未記載だった`シークレットハイビスカス`（パイオニア）を日刊スポーツ当時導入カレンダーから追加候補として発見。群は少なくとも6機種として継続監査する。
