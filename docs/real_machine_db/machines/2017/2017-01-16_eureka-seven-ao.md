machineName: パチスロ エウレカセブンAO
manufacturer: サミー（Sammy）
releaseDate: 2017-01-16
recordNumber: 1040
generation: 5号機 / 5.5号機期
systemType: A+ART / リアルボーナス+ART
formalModelName: エウレカセブンAO/XS
certificationNumber: 6S0834
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- サミー公式製品一覧は2017.1機として「パチスロエウレカセブンAO」を掲載。
- サミー公式マイスロ告知は2017-01-16を「本日ホール導入日」と明記。K-Navi、パチビー、HAZUSE DATAも2017-01-16で一致するためcanonical releaseDateは2017-01-16。
- 鹿児島県公安委員会告示で型式名「エウレカセブンAO/XS」、製造者サミー株式会社、検定番号6S0834を直接確認。
reliability: OFFICIAL_PLUS_PUBLIC_RECORD_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.5% |
| 2 | 99.3% |
| 3 | 102.1% |
| 4 | 105.2% |
| 5 | 110.1% |
| 6 | 115.7% |

- ちょんぼりすた、すろぱちくえすと、PiDEA業界記事で系列一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ボーナス合算
| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/248.2 |
| 2 | 1/246.4 |
| 3 | 1/237.4 |
| 4 | 1/233.2 |
| 5 | 1/222.9 |
| 6 | 1/214.9 |

### ART「アストラルオーシャン」初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/327.9 |
| 2 | 1/321.0 |
| 3 | 1/311.3 |
| 4 | 1/286.2 |
| 5 | 1/261.3 |
| 6 | 1/221.2 |

### CZ「シークレットバトル」出現率
| 設定 | CZ出現率 |
|---:|---:|
| 1 | 1/208.5 |
| 2 | 1/202.8 |
| 3 | 1/195.7 |
| 4 | 1/174.7 |
| 5 | 1/155.7 |
| 6 | 1/138.9 |

- ボーナス合算/ART系列はすろぱちくえすと、ちょんぼりすた等で照合。
- CZは解析資料間で丸め表記（1/208等）もあるが、精密系列をcanonicalとし丸め差はCONFLICTにしない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約32G / 50枚。
- ちょんぼりすた、すろぱちくえすと、当時実践記事系で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「アストラルオーシャン」: 約1.4枚/G。
- ボーナス込み実効純増表記: 約1.9枚/G。
- 物差しではART単体1.4枚/Gを主値とし、ボーナス込み1.9枚/Gは別定義で保持。
reliability: DATABASE_PLUS_ANALYSIS_HIGH

## basicPayout
- BIG BONUS / EPISODE BONUS: 約204枚。
- REGULAR BONUS / クォーツボーナス / BAR図柄揃い系: 約36枚。
- ART「アストラルオーシャン」: 初期ゲーム数は最低20Gを持ってQACで上乗せして開始し、実運用上40G以上表記の資料も存在。ゲーム数上乗せ型。
- 初期20G+QAC獲得分という内部説明と「初期40G以上」という案内表記は定義差として分離し、CONFLICT扱いしない。
reliability: DATABASE_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常天井: ボーナス間900GでART確定。途中にARTを挟んでもボーナス間ゲーム数として継続。
- CZ「シークレットバトル」: ART期待度約35%〜80%。
- ART開始時はQAC（クォーツアクティベートチャンス）からゲーム数を決定/上乗せ。
- 完全再現用の通常時全状態移行・ART内部上乗せ振り分けは本DB対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_DIRECT_COMPARISON_MULTI_SOURCE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時はボーナス間900G天井進捗をRESET。
- 内部状態は再抽選。
- RT状態は非RT状態へRESET。
- 液晶開始ステージは居住区。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_COMPARISON

### carryOverBehavior
- 据え置き時は前日のボーナス間天井進捗をCARRYOVER。
- 内部状態・RT状態もCARRYOVERとして扱う。朝一比較資料では設定変更と電源OFF→ON（据え置き）を分けて、後者を引継ぎと明記。
- 液晶ステージは居住区へ見た目上統一されるため、ステージ単独では変更判別にならない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior
- 純電源OFF→ON: ボーナス間900G天井進捗CARRYOVER。
- 内部状態CARRYOVER。
- RT状態CARRYOVER。
- 液晶ステージは居住区。
- 一方、ART中の楽曲解放、BIG中ストーリー紹介、エピソードBIG表示順、獲得枚数表示等の表示/遊技履歴系は電源OFF→ONだけでもRESETされる資料がある。これは天井・内部状態の引継ぎとは別フィールドとして扱う。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRYOVER。
- 純電源OFF→ON: CARRYOVER。
- 対象はボーナス間900G天井進捗。ART当選ではこの天井ゲーム数はリセットされない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 通常天井: ボーナス間900GでART確定。
- 設定変更で天井進捗は0から再スタート。
- 設定変更専用の固定短縮天井は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 本機は通常A/B等のゲーム数解除モードを朝一再抽選するタイプとして扱わない。
- 設定変更時に公開された朝一専用ゲーム数モード振り分け、短縮モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- ホール経営上重要なのは下記の内部状態再抽選とRT状態RESET。
reliability: ANALYSIS_HIGH_FOR_NO_GAME_NUMBER_MODE_PLUS_RESEARCH

### stateAfterReset
- 設定変更時は通常/高確/超高確を再抽選。
- 公開解析表は設定1〜3と設定4〜6の2グループ。
- 設定1〜3: 通常75.0% / 高確21.1% / 超高確3.9% → 高確以上合計25.0%。
- 設定4〜6: 通常71.1% / 高確21.1% / 超高確7.8% → 高確以上合計28.9%。
- 据え置き・純電源OFF→ON: 内部状態CARRYOVER。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更時は高確以上から開始する確率が設定1〜3で25.0%、設定4〜6で28.9%。
- RT状態が非RTへ戻るため、朝一RTリプレイ挙動から据え置きを見抜ける場合がある。
- 固定短縮天井、設定変更専用CZ確定、設定変更専用ART確定などは `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 前日ボーナス間900G天井進捗は設定変更で失われるため、深いハマリ台では宵越し価値を消す方向に作用。
- 設定変更専用の別個の公開ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_CEILING_RESET

### resetDetection
- サミー筐体の朝一リールガックン判別が有効とする当時解析が複数存在。1G目にガックンすれば設定変更濃厚。ただし店側対策・前日出目変更等が可能なので確定契約ではなく `RESET_LIKELY_IF_GACKUN_AND_UNCOUNTERED` とする。
- RT状態判別も有効。設定変更後は非RT状態から始まり、ベルこぼし目を引くまで通常リプレイのみ成立するため、朝一最初のベルこぼし目より前にRT固有のリプレイ（リリベ/転落リプ等）が出れば据え置き濃厚。
- 液晶ステージは設定変更・電源OFF→ONとも居住区で、ステージ単独判別は不可。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OPERATIONAL_CAVEAT

### numericResetData
- 通常天井: ボーナス間900G。
- 設定変更後の固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時状態振り分け:
  - 設定1〜3: 通常75.0% / 高確21.1% / 超高確3.9%（高確以上25.0%）。
  - 設定4〜6: 通常71.1% / 高確21.1% / 超高確7.8%（高確以上28.9%）。
- 朝一特定G以内のART実当選率/リセット専用CZ当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- identityはサミー公式の2017年製品一覧・ホール導入日告知と、鹿児島県公安委員会の型式/検定番号で強く固定。
- 性能コアはP-WORLD/パチビー、ちょんぼりすた、すろぱちくえすと、K-Navi、PiDEA等を横断し主要値一致。
- resetBehaviorは設定変更と電源OFF→ONの直接比較表が複数残っており、天井・内部状態・RT状態を高信頼で分離できる。
- 設定変更時状態表はHTMLのrowspan表示がテキスト抽出で欠落する資料があるが、当時複数整理資料の同一表構造から設定1〜3/設定4〜6の2グループとして保存。
- ART初期G数は「20G+QAC獲得分」と「初期40G以上」の表現差を、内部初期保証と実表示上の開始性能の定義差として保持。

## conflicts
- NONE_MATERIAL_CONFIRMED。

## missingFields
- 設定変更専用の固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一特定ゲーム数以内ART当選率、リセット専用CZ/ART確定率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実機完全再現用の詳細抽選値: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- OFFICIAL / Sammy製品一覧: https://www.sammy.co.jp/japanese/products/pachislot/
- OFFICIAL / Sammy エウレカセブンAO製品サイト: https://www.sammy.co.jp/japanese/product/pachislot/2016/eurekaao/sp/feature/
- OFFICIAL / Sammyマイスロ導入日告知: https://www.sammy.co.jp/japanese/myslot/news/index_9.html
- PUBLIC_RECORD / 鹿児島県公報（公安委員会告示、型式・検定番号）: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1609/documents/53970_20160905165545-1.pdf
- DATABASE / P-WORLD: https://www.p-world.co.jp/machine/database/8216
- DATABASE / パチビー: https://www.pachibee.jp/machines/index/216120000
- DATABASE / HAZUSE DATA: https://data.hazuse.com/?detail_id=99229&genre=209&machine_code=6S0834
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/sammy-slot/27815/
- ANALYSIS / すろぱちくえすと機種まとめ: https://www.slopachi-quest.com/kisyubetsu/eureka-seven-ao/
- ANALYSIS / 期待値見える化（設定・リセット判別）: https://slotjin.com/slot-tool/eurekasevenao-settei/
- ANALYSIS / スロがち: https://slogati.com/eureka-ao/
- INDUSTRY / PiDEA: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%80%8C%E3%82%A8%E3%82%A6%E3%83%AC%E3%82%AB%E3%82%BB%E3%83%96%E3%83%B3AO%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
