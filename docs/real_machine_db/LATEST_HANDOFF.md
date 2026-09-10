更新日: 2026-09-10

## 現在地点
- recordCount: **1238**
- latestRecordAdded: **デュエルドラゴンプラス**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-10-22_duel-dragon-plus.md`
- chronologicalFrontier: **2018-10-22**
- frontierLatestMachine: **デュエルドラゴンプラス — No.1238**
- schema: **resetBehavior v0.7**
- status: **2018-10-22_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1237を再取得して開始。
- `INDEX.md`は旧19件スナップショットのため、README指示どおり `LATEST_HANDOFF.md` + main実レコードを現行進捗の正本として継続。
- 開始時正本は1237件 / 2018-10-15 / `2018-10-15_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。
- 10/16〜10/21境界と10/22候補を再監査。
- 前handoffの「2018-10-22 チェインクロニクル」候補は、日刊スポーツ2018-09-28予定表では10/22だが、サミー公式2018-09-10が「11月上旬より全国稼動開始予定」、パチビー・一撃・すろぱちくえすと等の実導入DBが2018-11-05で一致するため10/22実導入とはせず、11/5群へ繰り下げ。
- 代わりに複数導入履歴から `デュエルドラゴンプラス` を捕捉しNo.1238として登録。
- 同機はユニバーサル公式2018年10月発売、グリーンべると2018-10-21納品予定、K-Navi/すろぱちくえすと等が2018-10-22導入。ちょんぼりすた等は「全国11/5、一部10/22〜」とするため、canonicalを最初の確認可能なホール導入2018-10-22とし地域差を保持。
- 性能コア: 設定1/2/5/6、機械割97.4/100.2/103.9/108.0%、BIG 1/331.0→1/290.0、REG 1/392.4→1/290.0、合算1/179.6→1/145.0、36.1〜38.3G/50枚、BIG300枚/REG最大100枚、RT20G・現状維持程度、約82%ループ、天井非搭載。
- resetBehavior: 設定変更時・電源OFF→ON時ともRT状態引継ぎ、液晶初期出目 `7・BAR・Do`。RT状態/液晶出目では設定変更判別不可。ガックン判別も不可とする攻略資料を回収。
- 型式名 `デュエルドラゴンプラスUL` は複数実機DBで確認。検定番号は型式名/メーカー/検定/認定/適合/号数等で再探索したが高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1238 — デュエルドラゴンプラス
- manufacturer: **ミズホ / ユニバーサルエンターテインメント系**
- releaseDateCanonical: **2018-10-22**
- nationwideRollout: **2018-11-05**
- formalModelName: **デュエルドラゴンプラスUL**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5.9号機 / A+RT / リアルボーナス+CZ+RT**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **97.4 / 100.2 / 103.9 / 108.0%**
- BIG: **1/331.0 / 1/324.4 / 1/306.2 / 1/290.0**
- REG: **1/392.4 / 1/368.2 / 1/329.3 / 1/290.0**
- bonusCombined: **1/179.6 / 1/172.5 / 1/158.7 / 1/145.0**
- baseGamesPer50: **約36.1〜38.3G**
- basicPayout: **BIG300枚 / REG最大100枚**
- RT: **20G / 現状維持程度 / 約82%ループ**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **RT状態引継ぎ / 液晶出目7・BAR・Do**。
- carryOver: **前日RT残り等は据え置き推測材料になり得るが、全内部状態の独立契約は未固定**。
- powerOFF→ON: **RT状態引継ぎ / 液晶出目7・BAR・Do**。
- gameCounterReset: **NOT_APPLICABLE_NO_CEILING_COUNTER**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: **朝一専用モード NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: **RT状態引継ぎ確認**。
- advantageousSection: **N/A_NOT_APPLICABLE_TO_CORE_GAMEPLAY**。
- resetBenefits: **短縮天井/初当たり優遇 NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **RT状態・液晶出目では設定変更判別不可 / ガックン判別不可**。
- numericResetData: **resetSpecificCeiling N/A / morningHitRate NONE_CONFIRMED / gakkunRate N/A_NOT_USABLE**。

## 2018-10-22群監査
### 登録済み
- No.1238 デュエルドラゴンプラス

### 横断監査
- すろぱちくえすと2018年導入一覧、2-9伝説系過去導入一覧、当時実戦系導入一覧は10/22パチスロとしてデュエルドラゴンプラスを掲載。
- 日刊スポーツ2018-09-28予定表のチェインクロニクル10/22は後続公式・実導入資料と競合し、11/5へ繰り下げ。
- 10/22同日で別型式/別スペック/PB/地域差として独立登録すべき追加機を今回高信頼で固定できず。
- 判定: `2018-10-22_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。

## 次の時系列候補
1. **2018-11-05群**をOPENする前に10/23〜11/04境界を再監査。
2. 11/5先行候補: **スーパープラネットSP（山佐） / パチスロ戦国乙女TYPE-A+（オリンピア） / パチスロらんま1/2（EXCITE） / パチスロ チェインクロニクル（サミー）**。
3. 11/5群は全メーカー/別スペック/PB/地域差まで監査してからCLOSE。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-10_kaitou-tenshi-twin-angel.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-10_kakutou-gekisenku.md`（格闘激戦区）**。
- 今回は新規時系列境界の誤候補修正とNo.1238登録を優先し、遡及QAカーソルは進めていない。

## 継続注意事項
- `INDEX.md`は旧19件スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 予定表の導入日と実導入日が後続資料で変わった場合、予定表を正本化せずCONFLICT/地域差として保持する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1238を再取得。
2. **1238件 / chronologicalFrontier 2018-10-22 / `2018-10-22_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 2018-10-23〜11-04境界監査後、11/5群の最初の未処理機種を時系列・メーカー横断で決定して登録。
4. チェインクロニクルは **2018-11-05候補**として扱う。
5. 遡及QAは **`2006-10_kakutou-gekisenku.md`（格闘激戦区）** から再開。

## 主要出典 — 取得日 2026-09-10
### No.1238 デュエルドラゴンプラス
- ユニバーサル公式: https://www.universal-777.com/product/slot/dueldragon_plus/
- グリーンべると: https://web-greenbelt.jp/00010777/
- PiDEA X: https://www.pidea.jp/articles/A%2BRT%E3%81%A7%E6%B1%BA%E9%97%98%E3%80%81%E5%86%8D%E3%81%B3%E3%80%8C%E3%83%87%E3%83%A5%E3%82%A8%E3%83%AB%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%80%8D%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB
- K-Navi: https://p-kn.com/slot/3110/
- すろぱちくえすと: https://www.slopachi-quest.com/article/dueldragon-plus/
- パチマガスロマガ（ボーナス）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/41/h-1.php
- パチマガスロマガ（50枚ベース）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/41/c.php
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/66434/
- モゲスロ: https://moge-site.com/archives/22740

### 10/22予定表補正
- サミー公式 チェインクロニクル発売告知: https://www.sammy.co.jp/japanese/news/2018/1119.html
- 日刊スポーツ2018-09-28導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201809280000351.html
- パチビー チェインクロニクル: https://www.pachibee.jp/machines/about/218100000
- 一撃 Sammy 2018一覧: https://1geki.jp/maker/sammy/
- すろぱちくえすと2018導入一覧: https://www.slopachi-quest.com/article/sindai-2018/
