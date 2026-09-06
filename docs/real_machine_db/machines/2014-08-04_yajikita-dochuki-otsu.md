# やじきた道中記乙

machineName: やじきた道中記乙
manufacturer: メーシー
releaseDate: 2014-08-04
releaseDatePrecision: exact_start
generation: 5号機
systemType: 擬似ボーナス+AT / 周期抽選
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- ユニバーサルエンターテインメント公式製品ページで「やじきた道中記乙」、メーカー **メーシー**、分類 **5号機**、タイプ **AT**、発売 **2014年8月**を確認。
- K-Navi、パチビー、P-WORLD系資料でホール導入開始 **2014-08-04** を確認。
- 2026年のスマスロ「やじきた道中記参る！」は別機種として除外。
- 本調査では2014年機固有の正式型式名/検定番号を安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: OFFICIAL / ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.6% |
| 3 | 101.6% |
| 4 | 106.6% |
| 5 | 111.3% |
| 6 | 116.6% |

- P-WORLD、当時解析、5号機クロニクル等で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | AT「やじきた祭」初当り | やじきたボーナス | AT+ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/397.9 | 1/875.1 | 1/273.5 |
| 2 | 1/391.4 | 1/827.8 | 1/265.7 |
| 3 | 1/378.2 | 1/801.2 | 1/256.9 |
| 4 | 1/343.2 | 1/779.6 | 1/238.3 |
| 5 | 1/303.1 | 1/725.1 | 1/213.8 |
| 6 | 1/268.0 | 1/681.4 | 1/192.3 |

- 当時解析・後年DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30G/50枚**。
- 後年機種DBで確認した比較用ベース値。公式ページに直接値はなく、今回固定できた値は単一二次資料系列のため信頼度を下げて保持。
- confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## netIncrease

- AT「やじきた祭」および擬似ボーナス: **約2.5枚/G**。
- ユニバーサル公式、K-Navi、パチビー等で照合。
- confidence: OFFICIAL / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「やじきた祭」: 初当り時に「あっぱれチャンス」で初期ゲーム数を決定。解析整理資料では基本 **50G+α** 系として扱われる。
- やじきたボーナス: **平均約150枚**。
- 超やじきたボーナス: **平均約200枚**。
- 擬似ボーナスはベルナビ5回のJACゲーム2回 + JAC IN CHALLENGE 10Gを軸に構成。
- confidence: OFFICIAL / ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は周期管理。1周期は最大 **180里（G）**、小役連等で短縮され、平均到達は約 **105G**。
- 周期到達でCZ相当「関所チャレンジ」へ移行し、勝利でAT「やじきた祭」。
- 周期天井: **10周期到達でAT確定**とする解析が主流。資料によって「関所チャレンジ11回目」と表現される場合があるが、AT終了直後の引き戻し関所を回数へ含む数え方の差があるため、単純な数値競合として平均化しない。
- 擬似ボーナス当選では周期天井進捗をリセットしないという解析あり。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **周期天井進捗をリセット**することを当時天井解析で確認。
- K-Navi解析では、周期モードを決める **MAPテーブル抽選が「設定変更時・AT終了時・5周期目終了時」**に行われる。よって設定変更時は周期モード選択MAPを新規抽選する直接根拠がある。
- 設定変更時の右上表示/内部残り周期Gの具体的初期契約は、質問ログの存在までは確認したが回答本文を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 設定据え置き時の周期天井進捗・MAPテーブル・残り周期Gについて、2014年機固有の直接比較表/明示文を今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 「設定変更で天井リセット」の反対命題から据え置き引継ぎを自動推定しない。

### powerCycleBehavior

- 設定変更なしの単純電源OFF→ON時について、周期進捗、MAPテーブル、残り周期G、内部状態を設定変更と直接比較した2014年機固有資料を今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2026年スマスロ後継機の電源OFF→ON仕様は混入させない。

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**（周期天井進捗リセット）。
- 据え置き: `UNVERIFIED_AFTER_RESEARCH`。
- 電源OFF→ONのみ: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 通常の周期天井を設定変更でリセットすることは確認。
- 設定変更専用の固定短縮天井・周期数短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- 周期モード選択MAPは **設定変更時に再抽選**。
- K-Naviが公開するMAPテーブル1〜39の設定変更時抽選は、以下の全設定共通系列として掲載される:
  - MAP 1〜6: 各6.02%
  - MAP 7〜10: 各4.20%
  - MAP 11: 4.19%
  - MAP 12〜16: 各4.00%
  - MAP 17〜21: 各2.00%
  - MAP 22〜26: 各1.04%
  - MAP 27〜32: 各0.98%
  - MAP 33: 0.78%
  - MAP 34〜35: 各0.39%
  - MAP 36〜39: 各0.05%
- これは朝一専用優遇テーブルというより、設定変更/AT終了/5周期終了時に共通して行われるMAP抽選。朝一専用値と誤解しないよう定義分離する。

### stateAfterReset

- AT中「集中状態」と通常時の周期モードを混同しない。
- 設定変更時の通常時内部状態について、周期MAP以外に別の高確/低確状態をリセット・再抽選する直接資料は `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時の周期MAP再抽選は確認。
- 設定変更専用の天井短縮、初回関所勝率優遇、朝一専用高確などは2014年機では `NONE_CONFIRMED_AFTER_RESEARCH`。
- 2026年スマスロ「やじきた道中記参る！」の特殊A/399まいる等のリセット恩恵は別仕様であり、本機へ転記しない。

### resetPenalties

- 設定変更により前日から進んだ周期天井進捗が消えるため、前日ハマリを宵越しで狙う観点では **天井進捗消去が主要な不利要素**。
- その他の設定変更固有ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、朝一液晶表示、ステージ等による設定変更確定/濃厚判別を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- K-Naviには2014-08-06時点で「設定変更時の右上ゲーム数表示」に関するユーザー質問が残るが、現存検索面では回答本文を安全に取得できないため判別契約には採用しない。

### numericResetData

- 周期モード選択MAP抽選: 上記MAP1〜39の振り分けを公開数値として保持。
- 設定変更専用短縮天井G数: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一特定G以内AT当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- 「設定変更時にも実施される」MAPテーブル抽選数値は公開されているが、AT終了時/5周期終了時にも共通するため **MORNING_RELEVANT_NOT_MORNING_EXCLUSIVE** として保持。
- 朝一専用の当選率・短縮天井・優遇率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

- 表記揺れ: `やじきた道中記乙 / やじきた乙 / やじきた / メーシー / MACY / やじきた道中記`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電源オフ / 天井 / 周期 / 180 / MAP / モード / ガックン / 右上 / 表示 / 型式 / 検定 / 50枚 / 1000円 / ベース`。
- 資料系統: ユニバーサル公式、K-Navi当時解析、P-WORLD、パチビー、2014年当時攻略記事、後年5号機DB/回顧資料。
- 2026年スマスロ「やじきた道中記参る！」は検索結果に大量混入するため全て別機種として除外。

## sources

取得日: **2026-09-07**

1. ユニバーサルエンターテインメント公式 — やじきた道中記乙
   - https://www.universal-777.com/product/slot/yajikita_otsu/
   - メーカー、5号機、AT、2014年8月、平均105G周期、製品概要
   - reliability: OFFICIAL
2. K-Navi — やじきた道中記乙
   - https://p-kn.com/slot/2095/
   - 導入2014-08-04、AT純増約2.5枚/G、周期最大180G/平均105G、基本構造
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
3. K-Navi — 周期モード抽選
   - https://p-kn.com/slot/2095/51145/
   - 設定変更時/AT終了時/5周期終了時のMAP抽選、MAP1〜39振り分け
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
4. K-Navi — 周期短縮抽選について
   - https://p-kn.com/slot/2095/50367/
   - 1周期180里、周期短縮構造
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
5. P-WORLD — やじきた道中記乙
   - https://www.p-world.co.jp/machine/database/7455
   - 設定別機械割、基本ゲームフロー
   - reliability: ANALYSIS_HIGH
6. パチビー — やじきた道中記乙
   - https://www.pachibee.jp/machines/index/214070001
   - 2014-08-04、AT純増2.5枚/G、やじきたB平均150枚/超やじきたB平均200枚
   - reliability: ANALYSIS_HIGH
7. ぱぴこ ガチスロ速報 — 2014-08-18解析
   - https://gachisuro-jissen.blog.jp/archives/11456445.html
   - AT/ボーナス初当り、合算、設定別機械割
   - reliability: ANALYSIS_SINGLE_PERIOD_SOURCE
8. 2-9伝説 — やじきた道中記乙 天井恩恵・解析（2014-08-04）
   - https://2-9densetsu.com/yajikitadoutyuki/
   - 周期天井、設定変更で天井G数リセット
   - reliability: ANALYSIS_SINGLE_PERIOD_SOURCE
9. スロパチクエスト — やじきた道中記乙 機種別解析まとめ
   - https://www.slopachi-quest.com/kisyubetsu/yazikita/
   - 10周期天井、擬似ボーナスで周期リセットなし、初当り/機械割照合
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
10. みんスロ — やじきた道中記乙
   - https://minslo.com/やじきた道中記乙/
   - 50枚約30G、純増、設定別出玉率の照合
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
11. 5号機クロニクル — ユニバーサル系5号機一覧
   - https://5goki.com/universal
   - 機械割、擬似ボーナス+AT、純増、基本AT性能の照合
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## missingFields

- 2014年機固有の正式型式名 / 検定番号
- 据え置き時の周期天井・残り周期・MAPの直接保持契約
- 設定変更なし電源OFF→ON時の周期進捗/MAP/内部状態の直接契約
- 本機固有の設定変更判別（ガックン、朝一表示等）の確定資料
- 朝一専用の当選率/短縮天井/優遇率

## conflicts

- 天井の表現に「10周期到達」と「関所チャレンジ11回目」がある。AT直後の引き戻し関所を回数に含める資料があるため、数え方の定義差を注記し、単純平均しない。
- 5号機クロニクルは導入を「2014年7月」とする一方、公式は発売2014年8月、K-Navi/パチビーはホール導入2014-08-04。ホール導入日フィールドは複数具体日資料が一致する **2014-08-04** を採用し、月表記差を注記する。
