# シンデレラブレイド2

machineName: シンデレラブレイド2
manufacturer: ネット
releaseDate: 2014-10-06
releaseDatePrecision: nationwide_hall_start
generation: 5号機
systemType: AT / 32G周期抽選 / ゲーム数上乗せ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- メーカー: **ネット株式会社**。
- ホール導入開始: **2014-10-06**。K-Navi、アタリ7、ALL7で一致。ネット公式プレスリリースは2014年8月7日時点で「2014年10月上旬より全国導入予定」と告知。
- 型式名: **シンデレラ×ブレイド2ND**（実機/後年DB表記で確認）。
- 数字形式の検定番号: `UNVERIFIED_AFTER_RESEARCH`。型式名・メーカー名・検定通過・検定番号を組み替えて再探索したが、安全に固定できる数字形式番号を今回確定できず。
- confidence: OFFICIAL_FOR_PRODUCT_AND_RELEASE_WINDOW / ANALYSIS_HIGH_MULTI_SOURCE_FOR_EXACT_HALL_DATE / ANALYSIS_SINGLE_FOR_MODEL_NAME

## payoutRateBySetting

| 設定 | PAYOUT |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.2% |
| 3 | 100.0% |
| 4 | 103.5% |
| 5 | 107.3% |
| 6 | 115.4% |

- アタリ7、ちょんぼりすた、当時系新台情報で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT「武闘会」初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/265 |
| 2 | 1/243 |
| 3 | 1/238 |
| 4 | 1/205 |
| 5 | 1/192 |
| 6 | 1/147 |

- アタリ7、ちょんぼりすた、スロパチクエスト系で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **30.73G/50枚**。
- パチマガスロマガ小役解析に50枚あたり30.73G、ちょんぼりすたも約30.7G/1000円として整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「武闘会」: **約2.3枚/G**。
- ネット公式プレスリリース、K-Navi、P-WORLDで一致。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH

## basicPayout

- AT「武闘会」は初当たり時にOPT（おしりペンペンタイム）で初期ゲーム数を決定し、**30G以上**から開始するゲーム数上乗せ型AT。
- P-WORLDは武闘会を「30ゲーム以上」と掲載。
- 通常時は**1周期32G + ジャッジメントバトル**でATを抽選。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は32G周期で剣ポイント/レベルを蓄積し、周期末ジャッジメントバトルでATを抽選。
- 最大天井: **25周期**。ゲーム数換算は資料により約875G〜約925G程度の表現差があるため、固定G天井に変換せず「25周期」をcanonicalにする。
- 天井周期到達時: **レイラOPT**。解析では最低30G保証・継続率95〜99%。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- **設定変更で天井までの周期数/ゲーム数進捗はリセット**。
- 設定変更後は通常AT終了後とは異なる**専用の天井周期振り分け**が適用され、5・10・15・20周期が大幅に選ばれやすい。
- 剣ポイント/レベルなど、設定変更時にどこまで初期化されるかを本機2固有の高信頼直接資料で全項目固定することはできず、天井周期以外は `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 本機2について、据え置き時の前日周期数、剣ポイント、内部クリアポイント、滞在ステージ等の全契約を直接一覧化した高信頼資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 初代シンデレラブレイドの「電源切入は前日のまま」という資料は、本機2へ自動転記しない。

### powerCycleBehavior

- 設定変更なしの単純電源OFF→ONで、周期数/剣ポイント/内部クリアポイント/ステージをどう扱うかを本機2固有資料で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 設定変更時は **RESET**。最大25周期の天井進捗をリセットして専用周期振り分けを再抽選する。
- 据え置き/純電断側は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 固定「○G天井」への単純短縮ではなく、**設定変更専用の天井周期振り分け優遇**。
- 設定変更時振り分け（解析値）:
  - 1〜4周期: 各1%
  - 5周期: 15%
  - 6〜9周期: 各1%
  - 10周期: 25%
  - 11〜14周期: 各2%
  - 15周期: 25%
  - 16〜19周期: 各1%
  - 20周期: 10%
  - 21〜25周期: 各1%
- 累積到達率: **5周期まで19% / 10周期まで48% / 15周期まで81% / 20周期まで95%**。
- 通常時は最大25周期が深く選ばれやすいため、朝一設定変更は明確な短縮恩恵を持つ。

### modeAfterReset

- 本機は一般的なゲーム数解除モードA/B等ではなく周期天井振り分け管理。設定変更時はその**天井周期を専用テーブルで再抽選**する。
- ポイント獲得率に関わる内部モード等の設定変更時再抽選契約は、物差し用途を超える詳細かつ直接資料不足のため `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 家事/修行/迷宮/ビーチ/プリシラ等の通常ステージ、およびポイント獲得に関わる内部状態の設定変更時初期状態について、本機2固有の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 最大25周期の通常天井に対し、設定変更後は**5の倍数周期を中心に浅い天井周期が大幅優遇**。
- 解析値では**10周期まで48%、15周期まで81%、20周期まで95%**で天井周期到達。
- 天井周期到達時は**レイラOPT（最低30G保証、継続率95〜99%）**。
- 2014年の朝一実践値300件でも5・10・15・20周期に当選分布が集中し、解析テーブル公表前の実戦観測と方向性が一致。

### resetPenalties

- 設定変更固有の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機2固有のガックン、初期出目、初期ステージ等による**確定的な設定変更判別**は、設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンを再探索しても高信頼資料で固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一に浅い5の倍数周期で天井OPTが出現することは設定変更を強く支持する挙動だが、通常AT終了後にも浅い天井周期振り分け自体は存在するため、単発挙動を100%判別とは扱わない。

### numericResetData

- 設定変更時天井周期振り分け: **1〜4各1 / 5=15 / 6〜9各1 / 10=25 / 11〜14各2 / 15=25 / 16〜19各1 / 20=10 / 21〜25各1 (%)**。
- 累積到達率: **5周期19% / 10周期48% / 15周期81% / 20周期95%**。
- 朝一実践値: **300件サンプル**で5・10・15・20周期への集中を観測。これは解析値ではなく実践サンプルとして分離。

### publicMorningNumbers

- 上記設定変更専用周期振り分け・累積到達率を採用。
- 朝一実戦300件は補助観測として保存し、解析振り分けと平均しない。

## resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `シンデレラブレイド2 / シンデレラ×ブレイド2ND / シンブレ2 / NET / ネット`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / 周期 / モード / ガックン / 初期出目 / ステージ`。
- 資料系統: NET公式プレスリリース、K-Navi、P-WORLD、パチマガスロマガ、ちょんぼりすた、スロパチクエスト、当時実践集計、旧攻略記事。
- 初代シンデレラブレイドの電断/据え置き資料は同シリーズでも別機種のため転記しない。

## sources

取得日: 2026-09-07

1. ネット株式会社プレスリリース（DreamNews転載）— シンデレラブレイド2発売決定
   - https://www.dreamnews.jp/press/0000097453/
   - 2014-08-07、2014年10月上旬全国導入予定、32G周期、AT純増2.3枚/G
   - reliability: OFFICIAL
2. K-Navi — シンデレラブレイド2
   - https://p-kn.com/slot/2116/
   - 導入2014-10-06、32G周期、純増2.3枚/G
   - reliability: ANALYSIS_HIGH
3. P-WORLD — シンデレラブレイド2
   - https://www.p-world.co.jp/machine/database/7403
   - 5号機AT、武闘会30G以上、純増約2.3枚/G、最大25周期天井
   - reliability: INDUSTRY_DATABASE
4. パチマガスロマガ — 小役確率/50枚あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/159/c-1.php
   - 50枚あたり30.73G
   - reliability: ANALYSIS_HIGH
5. ちょんぼりすた — シンデレラブレイド2解析
   - https://chonborista.com/slot/net-slot/3448/
   - PAYOUT、AT初当たり、天井、設定変更専用天井周期振り分け/累積到達率、30.7G/50枚
   - reliability: ANALYSIS_HIGH
6. アタリ7 — シンデレラブレイド2
   - https://www.atari7.com/slot/date1426485017.php
   - 導入2014-10-06、AT初当たり/PAYOUT
   - reliability: ANALYSIS_HIGH
7. スロパチクエスト — 設定変更挙動・恩恵
   - https://www.slopachi-quest.com/article/cinderella-blade2-reset/
   - 朝一実践値300件、5・10・15・20周期への集中
   - reliability: ANALYSIS_SINGLE_PRACTICAL_SAMPLE
8. スロパチクエスト — ゾーン・天井周期振り分け解析
   - https://www.slopachi-quest.com/article/cinderella-blade2-zone2/
   - リセット時0Gから期待値プラスとの考察、10周期まで約50%で天井発動
   - reliability: ANALYSIS_SINGLE
9. ALL7 — 2014年10月導入一覧
   - https://www.all7.jp/plans/index/2014/10
   - 2014-10-06導入予定群の境界監査
   - reliability: INDUSTRY_DATABASE
10. 後年実機資料 — 型式名シンデレラ×ブレイド2ND
   - https://w.atwiki.jp/samita_skill/pages/151.html
   - reliability: RETROSPECTIVE_SINGLE

## missingFields

- 数字形式の検定番号
- 本機2固有の据え置き時の周期/剣ポイント/内部クリアポイントの詳細引継ぎ契約
- 本機2固有の単純電源OFF→ON契約
- 設定変更時の内部状態/通常ステージ初期化契約
- ガックン等の確定的な本機固有変更判別

## conflicts

- 最大25周期のゲーム数換算は約875G/約925Gなど資料差がある。周期長にジャッジメントバトル等をどう含めるかの定義差があるため平均せず、canonicalは**25周期**とする。

## finalStatus

- coreStatus: **COMPLETE_CORE_WITH_SOURCE_LIMITS**
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**
- confidenceOverall: **OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
