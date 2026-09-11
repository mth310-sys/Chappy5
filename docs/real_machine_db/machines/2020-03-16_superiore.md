# スペリオーレ

No: 1345
machineName: スペリオーレ
machineNameVariants: パチスロ スペリオーレ / SスペリオーレBB
manufacturer: バルテック
releaseDate: 2020-03-16
formalModelName: SスペリオーレBB
certificationNumber: 9S1368
generation: 6号機
systemType: AT / 疑似ボーナス連チャン / 完全告知

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.8% |
| 2 | 98.8% |
| 3 | 100.5% |
| 4 | 103.8% |
| 5 | 105.8% |
| 6 | 110.2% |

- HAZUSE、K-Navi、ちょんぼりすた、スロパチクエスト等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
### 疑似ボーナス
| 設定 | SUPER BIG | BIG | REG | 合算 |
|---|---:|---:|---:|---:|
| 1 | 1/3487.3 | 1/551.6 | 1/613.1 | 1/268.0 |
| 2 | 1/2862.6 | 1/575.8 | 1/543.7 | 1/254.8 |
| 3 | 1/3282.6 | 1/502.2 | 1/557.1 | 1/244.4 |
| 4 | 1/3650.0 | 1/438.7 | 1/472.6 | 1/214.2 |
| 5 | 1/5263.2 | 1/384.7 | 1/404.0 | 1/189.9 |
| 6 | 1/4015.9 | 1/342.7 | 1/383.0 | 1/173.1 |

- K-Navi、HAZUSE系整理、ちょんぼりすた、スロパチクエスト等で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 設定1: 約50.0G/50枚。
- 設定1〜6レンジ: 約50.0〜51.2G/50枚。
- 設定別: 50.0 / 50.1 / 50.4 / 50.6 / 50.9 / 51.2G。
- なな徹・パチマガスロマガ等でレンジ一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- 疑似ボーナス純増: 約5.0枚/G。
- reliability: ANALYSIS_HIGH

## basicPayout
- SUPER BIG: 約500枚（ベルナビ75回）。
- BIG: 約300枚（ベルナビ45回）。
- REG: 約100枚（ベルナビ15回）。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はVランプ点灯でボーナス確定となる完全告知型。
- 天井: **有利区間移行後1231G**。到達時はBIG以上。設定1は最大天井到達時S-BIG確定とする解析あり。
- ボーナス終了後は有利区間終了→再移行して連チャンを狙う構造。
- 有利区間移行時モード: 天国 / モードA / モードB。
- 有利区間移行時モード振り分け（設定1→6）:
  - 天国: 56.3 / 50.0 / 54.7 / 53.1 / 50.0 / 50.0%
  - モードA: 31.3 / 25.0 / 29.7 / 23.4 / 25.0 / 25.0%
  - モードB: 12.5 / 25.0 / 15.6 / 23.4 / 25.0 / 25.0%
- 天国選択時は1〜96Gが100%。
- 設定1の1〜99G以内当選期待度は60.2%。全設定では 60.2 / 54.4 / 59.4 / 58.4 / 56.4 / 57.2%。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_GAME_RESET_AND_ADVANTAGEOUS_SECTION_START
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は **天井RESET**。
- 朝一リセット後は **非有利区間からスタート** とする当時攻略解析を確認。
- 枠ランプは消灯、有利区間ランプも消灯。
- 本機固有の設定変更時「内部状態」再抽選契約は `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きは、電源OFF→ON時の公開表に基づき **天井CARRY_OVER** と整理。
- 据え置き時の内部モード・状態の独立した直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 電源OFF→ONのみでは **天井CARRY_OVER**。
- 枠ランプ消灯 / 有利区間ランプ消灯。
- 内部モード・内部状態の引継ぎを直接明記した本機固有資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 電源OFF→ON: **CARRY_OVER**。
- 通常の最大天井は有利区間移行後1231G。

### ceilingAfterReset
- 設定変更専用の最大天井短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後は非有利区間から有利区間へ再移行し、その移行時モード抽選により天国なら1〜96Gで当選する。
- これは設定変更専用の天井短縮ではなく、ボーナス後を含む **有利区間移行時共通仕様** として分離する。

### modeAfterReset
- 設定変更後は非有利区間からスタートし、有利区間移行時に天国 / A / Bを抽選。
- 公開されている有利区間移行時振り分けは上記 `modeSpecificMinimumData` の通り。
- ボーナス後の有利区間再移行にも用いられる共通テーブルであり、設定変更専用テーブルとは扱わない。
- 純電断・据え置き時の現在モード引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 独立した低確/高確等の内部状態について、設定変更・据え置き・純電断を三者比較できる本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。
- モード抽選の公開値から内部状態契約を推測補完しない。

### advantageousSectionReset
- 設定変更後は **非有利区間からスタート**。
- ボーナス終了後も有利区間終了→再移行する仕様。
- 通常時は有利区間ランプ消灯タイプで、ランプはボーナス中のみ点灯するとする当時解析がある。
- 電源OFF→ON時はランプ消灯のため、ランプ外観のみで設定変更/据え置きを判別できない。

### resetBenefits
- 設定変更後は非有利区間から有利区間へ新規移行するため、移行時モード抽選を受ける。
- 天国選択時は1〜96Gで当選。設定1を含め99G以内の当選期待度が高く、当時攻略ではリセット後99G以内を狙い目としている。
- ただしこの高確率ゾーンはボーナス後の有利区間再移行にも適用されるため、**設定変更だけの固有恩恵ではない**。

### resetPenalties
- 設定変更で前日の天井進行を消去。
- その他の設定変更専用不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更・電源OFF→ONとも枠ランプ消灯 / 有利区間ランプ消灯。
- 通常時は有利区間ランプ消灯タイプのため **有利区間ランプによる変更判別不可**。
- 当時攻略でもリセット判別は「調査中」とされており、本機固有のガックン発生条件・発生率は資料系統を変えた再探索でも固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 通常最大天井: **有利区間移行後1231G**。
- 設定変更後は非有利区間開始→有利区間移行時モード抽選。
- 有利区間移行時モード（設定1→6）:
  - 天国: **56.3 / 50.0 / 54.7 / 53.1 / 50.0 / 50.0%**
  - A: **31.3 / 25.0 / 29.7 / 23.4 / 25.0 / 25.0%**
  - B: **12.5 / 25.0 / 15.6 / 23.4 / 25.0 / 25.0%**
- 天国時: **1〜96G 100%**。
- 1〜99G以内当選期待度（設定1→6）: **60.2 / 54.4 / 59.4 / 58.4 / 56.4 / 57.2%**。
- 上記は **有利区間移行時共通値 / ボーナス分布値** であり、設定変更専用数値とは区別する。
- 設定変更専用の短縮天井・専用モード振り分け・ガックン率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## resetBehavior 再探索メモ
2026-09-11に `スペリオーレ / パチスロ スペリオーレ / SスペリオーレBB / バルテック / 9S1368 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 有利区間 / 有利区間ランプ / 99G` を組み替え、バルテック公式プレス一覧、HAZUSE、K-Navi、なな徹、パチマガスロマガ、ちょんぼりすた、スロパチクエスト、おスロおパチおいでやす、旧解析整理を横断。設定変更時天井RESET、電断時天井CARRY_OVER、設定変更後非有利区間スタート、有利区間移行時モード表、99G以内当選期待度は固定できた。内部状態、据え置き/純電断のモード直接契約、ガックンは十分な再探索後も固定できず推測補完していない。

## conflicts
- `NONE_CONFIRMED`。
- 50枚あたりゲーム数は「50.0G」と「50.0〜51.2G」の掲載があるが、前者は主に設定1目安、後者は設定差込みレンジであり定義差として扱い、CONFLICTにはしない。

## sources
取得日: 2026-09-11

1. バルテック公式 プレスリリース一覧
   - https://www.baltec.co.jp/press/press.html
   - 2020-02-17に「パチスロ スペリオーレ」製品情報公開を確認。
   - reliability: OFFICIAL
2. HAZUSE
   - https://hazuse.com/machine/pachislot/9S1368/
   - 型式SスペリオーレBB、検定番号9S1368、導入2020-03-16、機械割、純増、基本獲得枚数を確認。
   - reliability: ANALYSIS_HIGH
3. K-Navi
   - https://p-kn.com/slot/3424/
   - 導入日、設定別SBB/BB/REG/合算、基本獲得枚数を照合。
   - reliability: ANALYSIS_HIGH
4. なな徹 基本
   - https://nana-press.com/kaiseki/machine/47/
   - 2020-03-16、純増約5.0枚/G、50.0〜51.2G/50枚、1231G天井、基本獲得枚数を確認。
   - reliability: ANALYSIS_HIGH
5. なな徹 モード移行/G数振り分け
   - https://nana-press.com/kaiseki/machine/47/829/
   - 有利区間移行時の天国/A/B設定別振り分け、天国1〜96G 100%を確認。
   - reliability: ANALYSIS_HIGH
6. なな徹 ボーナス分布
   - https://nana-press.com/kaiseki/machine/47/831/
   - 1〜99G以内当選期待度 60.2/54.4/59.4/58.4/56.4/57.2%等を確認。
   - reliability: ANALYSIS_HIGH
7. なな徹 天井/ヤメ時
   - https://nana-press.com/kaiseki/machine/47/824/
   - 有利区間移行後1231G、設定1の99G以内約60%を照合。
   - reliability: ANALYSIS_HIGH
8. なな徹 小役確率
   - https://nana-press.com/kaiseki/machine/47/827/
   - 50枚あたり約50.0〜51.2Gを確認。
   - reliability: ANALYSIS_HIGH
9. パチマガスロマガ 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/61/c.php
   - 50枚あたり約50.0〜51.2Gを照合。
   - reliability: ANALYSIS_HIGH
10. パチマガスロマガ 設定別ボーナス分布
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/61/03.php
   - 1〜99G当選率を照合。
   - reliability: ANALYSIS_HIGH
11. スロパチクエスト 天井/朝一
   - https://www.slopachi-quest.com/article/superiore-tennjou/
   - 設定変更=天井RESET、電源OFF→ON=天井CARRY_OVER、両方の枠/有利区間ランプ消灯、設定変更後非有利区間開始、ランプ判別不可を確認。
   - reliability: ANALYSIS_HIGH
12. おスロおパチおいでやす
   - https://oslo-opachi.com/2020/03/16/superiore-tennjou/
   - 1231G天井、BIG以上、約500/300/100枚、リセット狙い情報を照合。
   - reliability: ANALYSIS_SINGLE
13. ちょんぼりすた
   - https://chonborista.com/slot/baltec/105472/
   - 導入日、設定別疑似ボーナス、機械割、純増、設定別ベースを照合。
   - reliability: ANALYSIS_HIGH
14. パチパチ情報部 導入直前まとめ
   - https://pachi-jyouhoukyoku.hatenablog.com/entry/2020/03/13/234806
   - SBBベルナビ75回約500枚、NBB45回約300枚、RB15回約100枚を照合。
   - reliability: ANALYSIS_SINGLE

## missingFields
- 設定変更時の独立した内部状態（低確/高確等）契約: UNVERIFIED_AFTER_RESEARCH
- 据え置き/純電断時の内部モード・状態直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の固定短縮天井・専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## recordStatus
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_GAME_RESET_AND_ADVANTAGEOUS_SECTION_START
- overallReliability: ANALYSIS_HIGH_WITH_OFFICIAL_PRODUCT_EXISTENCE_CONFIRMATION
