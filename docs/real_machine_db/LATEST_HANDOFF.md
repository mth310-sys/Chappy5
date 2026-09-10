更新日: 2026-09-10

## 現在地点
- recordCount: **1242**
- latestRecordAdded: **パチスロ チェインクロニクル**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-11-05_pachislot-chain-chronicle.md`
- chronologicalFrontier: **2018-11-05**
- frontierLatestMachine: **パチスロ チェインクロニクル — No.1242**
- schema: **resetBehavior v0.7**
- status: **2018-11-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1241を再取得して開始。
- `INDEX.md`は旧スナップショットのため、README指示どおり `LATEST_HANDOFF.md` + main実レコードを現行進捗の正本として継続。
- 開始時正本は1241件 / 2018-11-05 / `2018-11-05_GROUP_OPEN_3_OF_AT_LEAST_4_PROCESSED`。
- handoff指定の次機種 `パチスロ チェインクロニクル（Sammy）` をNo.1242として登録。
- 当時導入一覧の11/5群は `スーパープラネットSP / パチスロ戦国乙女TYPE-A+ / パチスロらんま1/2 / パチスロ チェインクロニクル` の4機で一致。4機登録完了後に再監査し、11/5群をCLOSEDとした。
- 次の明確な導入群は2018-11-19。すろぱちくえすと2018導入一覧では `戦コレ！［泰平女君］徳川家康 / バイオハザード イントゥザパニック / ダンまち` の3機。

## No.1242 — パチスロ チェインクロニクル
- manufacturer: **Sammy**
- releaseDateCanonical: **2018-11-05**
- formalModelName: **SチェインクロニクルWR**
- certificationNumber: **8S0469**
- generation/system: **6号機 / AT / CZ / 擬似ボーナス / AP周期管理**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.0 / 101.4 / 104.6 / 107.2 / 110.1%**
- AT初当たり: **1/354.9 / 1/342.1 / 1/313.0 / 1/281.8 / 1/263.2 / 1/249.4**
- baseGamesPer50: **39.03G（全設定共通）**
- netIncrease: **約4.0枚/G**
- 義勇軍BONUS: **30G**
- conventionalGameCountCeiling: **NONE_CONFIRMED**
- AP周期上限: **333AP**。固定G数天井とは分離管理。

### resetBehavior v0.7
- settingChange: **CONFIRMED_PARTIAL**。APリセット、AP周期進捗リセット、内部状態リセット、朝一AP表示 `???`。液晶ステージはUNVERIFIED。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。据え置きを純電断と自動同義扱いしない。
- powerOFF→ON: **CONFIRMED_PARTIAL**。APは内部引継ぎ、AP周期進捗引継ぎ、内部状態引継ぎ、表示は `???`。液晶ステージはUNVERIFIED。
- gameCounterReset: **NOT_APPLICABLE_CONVENTIONAL_GAME_COUNT_COUNTER**。代替管理値APは設定変更でリセット、純電断で内部引継ぎ。
- ceilingAfterReset: **設定変更後も通常最大333AP。短縮上限なし確認**。
- mode/state: 設定変更で内部状態リセット、純電断で内部状態引継ぎ。具体的初期分布はUNVERIFIED。
- advantageousSection: **APPLICABLE_6_0_AT_MACHINE_SPECIFIC_SECTION_LAMP_DETAIL_UNVERIFIED_AFTER_RESEARCH**。一般6号機規則から機種固有契約を補完しない。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **PARTIAL_CONFIRMED**。ガックン判別有効との解析あり。発生率はUNVERIFIED。AP `???` は設定変更/純電断双方で出るため単独判別不可。
- quality note: 一撃初期資料の内部状態「調査中」と後期更新資料のリセット/引継ぎ確定は `SOURCE_UPDATE_MATURITY_DIFFERENCE_RESET_STATE` として履歴保持。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- main実レコード再確認で、`2006-10_kakutou-gekisenku.md` → `2006-10_burglar.md` → `2006-10_nangoku-musume-30.md` → `2006-11_cs-surogenjin.md` → `2006-11_jackpot-tropical-version.md` は既にresetBehavior QA収録済みだったため、重複編集せずスキップ。
- firstMissingResetRecordFound: **`docs/real_machine_db/machines/2006-11_garou-densetsu.md`（餓狼伝説）**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-11_garou-densetsu.md`**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-11_jack-to-mamenoki.md`（ジャックと豆の木）**。Git追加履歴で餓狼伝説の次の実機追加であることを確認。

### 餓狼伝説 resetBehavior v0.7 QA
- 既存 `coreStatus: PARTIAL` を維持。性能側ステータスは変更せず、reset QA状態を別管理。
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- 当時グリーンべると/P-WORLD資料から、初代に**ボーナス間一定G数で餓狼チャンスが発動する天井機能**があること自体は確認。
- 初代固有の正確な天井G数、設定変更/据え置き/純電断時の天井進捗・GC状態処理は再探索後も固定できず。
- advantageousSection: **NOT_APPLICABLE**。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_CEILING_EXISTENCE_CONFIRMED_RESET_CARRYOVER_POWER_CYCLE_AND_NUMERIC_THRESHOLD_UNVERIFIED**。
- 後継 `餓狼伝説スペシャル / 餓狼伝説☆双撃 / 餓狼伝説PREMIUM` の天井・reset数値は初代へ転記していない。

## 2018-11-05群監査
### 登録済み
- No.1239 スーパープラネットSP
- No.1240 パチスロ戦国乙女TYPE-A+
- No.1241 パチスロらんま1/2
- No.1242 パチスロ チェインクロニクル

### 判定
- **2018-11-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。
- 当時/後年導入一覧で11/5の4機構成を再照合。
- 11/12単独群は高信頼で固定できず。らんま1/2の11/12表記は既存CONFLICTとしてNo.1241内に保持。
- 次の明確な群は **2018-11-19**。

## 次の時系列候補 — 2018-11-19群
1. **戦コレ！［泰平女君］徳川家康（コナミアミューズメント） — No.1243候補**
2. **バイオハザード イントゥザパニック**
3. **ダンまち**

- コナミ公式は戦コレ徳川家康を2018年11月稼働の6号機ATとして掲載。
- K-Navi / ちょんぼりすた / すろぱちくえすとは2018-11-19導入で一致。
- 次回はまず11/6〜11/18境界を再監査してから、戦コレ徳川家康をNo.1243候補として着手する。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1242を再取得。
2. **1242件 / chronologicalFrontier 2018-11-05 / `2018-11-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 2018-11-06〜2018-11-18境界を再監査。
4. 次の未処理機種 **戦コレ！［泰平女君］徳川家康** をNo.1243候補として調査・登録し、11/19群をOPEN。
5. 遡及QAは **`docs/real_machine_db/machines/2006-11_jack-to-mamenoki.md`（ジャックと豆の木）** から再開。

## 主要出典 — 取得日 2026-09-10
### No.1242 パチスロ チェインクロニクル
- パチビー: https://www.pachibee.jp/machines/index/218100000
- HAZUSE: https://hazuse.com/machine/pachislot/8S0469/
- 一撃 設定変更/天井: https://1geki.jp/slot/s_cc/3/
- 一撃 小役確率: https://1geki.jp/slot/s_cc/4/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/65025/
- すろぱちくえすと: https://www.slopachi-quest.com/article/chainchronicle/
- すろぱちくえすと設定判別: https://www.slopachi-quest.com/article/chain-chronicle-settei/

### 餓狼伝説 reset QA
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/1899/greenbelt
- 5号機クロニクル SNKプレイモア: https://5goki.com/snkplaymore
- pacnk: https://pacnk.com/slot/tools/sh_garoudensetsu.html
- pachinko's blog: https://pachinko.hatenablog.jp/entry/2006/12/garouDensetsu

### 時系列境界
- すろぱちくえすと2018導入一覧: https://www.slopachi-quest.com/article/sindai-2018/
- コナミ公式 戦コレ徳川家康: https://www.konami.com/amusement/psm/archive/ps/2018/sencolletokugawa/
- K-Navi 戦コレ徳川家康: https://p-kn.com/slot/3108/
