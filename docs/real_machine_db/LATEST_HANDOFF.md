更新日: 2026-09-14

## 現在地点
- recordCount: **1682**
- latestRecordAdded: **L 新・必殺仕置人 回胴 CRASH SPEC — No.1682**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-11-05_hissatsu-shiokinin-crash-spec.md`
- chronologicalFrontier: **2024-11-05**
- schema: **resetBehavior v0.7**
- status: **2024-11-05_BOUNDARY_OPEN_1_OF_2_CURRENTLY_CONFIRMED_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1681を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1681の次の未処理候補 `L 新・必殺仕置人 回胴 CRASH SPEC`（2024-11-05）をNo.1682として追加。
- 型式 `L新・必殺仕置人KC`、検定番号 `3S1852`、京楽産業．、2024-11-05導入を遊技通信/P-WORLD・HAZUSE等で照合。
- 設定1〜6の機械割は 97.6 / 98.5 / 101.1 / 105.4 / 108.8 / 112.9%。BONUS初当りは 1/230.7 / 1/224.1 / 1/212.9 / 1/198.2 / 1/184.7 / 1/169.0、AT初当りは 1/456.0 / 1/438.9 / 1/411.2 / 1/380.7 / 1/350.7 / 1/319.9。
- 約32.4G/50枚。BIG/真出陣BONUS/AT「仕置無双RUSH」は純増約3.0枚/G。BIGは30G+α・AT期待度約40%、真出陣BONUSは30G・AT濃厚、ATは初期50G+α。
- 通常時最大999G+αでBONUS当選のゲーム数天井。
- resetBehavior v0.7: 設定変更で有利区間・天井・内部状態・寅の会ポイント・死神ポイントをRESET。据え置きでは全項目を内部で引継ぎ。
- 設定1の設定変更後天井振り分けは408G 40.8% / 999G 59.2%。設定2〜6の個別振り分けは検索語・型式・メーカーを変えて再探索後も信頼できる固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更時は寅の会ポイント初期値を内部抽選。初回寅の会演出は赤月ステージ移行濃厚で、獲得する超高確G数に10G加算。
- 純電源OFF→ONでは天井G数と寅の会ポイントを内部で引き継ぎ、液晶上は0から開始。開始ステージは主水ステージ。
- 純電源OFF→ON時の内部状態・死神ポイント・有利区間を項目別に直接明記した高信頼資料は不足しており、一般仕様から推測せず `UNVERIFIED_AFTER_RESEARCH` を保持。
- 有利区間ランプでは設定変更/据え置き判別不可。機種専用リセット判別はなな徹でも「現在調査中」。本機固有ガックン条件/発生率も正式型式・京楽・シリーズ名を含む複数検索後に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 直前handoffでは2024-11-05群を4機候補としていたが境界再監査で日付差を確認。ALL7および別月間一覧では `Lダブルアタック2 with OZS-1000＆RAPHAEL` と `スマスロ モンスターハンターライズ` は **2024-11-18** 導入として掲載される。一方、2024-11-05導入は `L 新・必殺仕置人 回胴 CRASH SPEC` と `Lバンドリ！` が一致。よって現時点のcanonical queueでは2024-11-05群を2機として扱い、1/2処理済みとする。

## No.1682 — L 新・必殺仕置人 回胴 CRASH SPEC
- path: `docs/real_machine_db/machines/2024-11-05_hissatsu-shiokinin-crash-spec.md`
- manufacturer: **京楽産業．**
- formalModel: **L新・必殺仕置人KC**
- inspectionCode: **3S1852**
- releaseDate: **2024-11-05**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 擬似ボーナス + ゲーム数上乗せ型AT**
- payoutRate: **97.6 / 98.5 / 101.1 / 105.4 / 108.8 / 112.9%**
- BONUS初当り: **1/230.7 / 1/224.1 / 1/212.9 / 1/198.2 / 1/184.7 / 1/169.0**
- AT初当り: **1/456.0 / 1/438.9 / 1/411.2 / 1/380.7 / 1/350.7 / 1/319.9**
- base: **約32.4G/50枚**
- netIncrease: **約3.0枚/G**
- normalCeiling: **999G+α**
- resetCeilingSetting1: **408G 40.8% / 999G 59.2%**
- settingChange: **有利区間・天井・内部状態・寅の会pt・死神pt RESET / 寅の会初期値抽選**
- carryOver: **有利区間・天井・内部状態・寅の会pt・死神pt引継ぎ**
- powerCycle: **天井・寅の会pt引継ぎ（液晶表示0） / 全項目直接契約は一部UNVERIFIED**
- resetBenefit: **初回寅の会→赤月濃厚 / 超高確G数+10G**
- detection: **有利区間ランプ判別不可 / ガックンUNVERIFIED**

## 2024-11-05境界 — OPEN
1. L 新・必殺仕置人 回胴 CRASH SPEC — No.1682 DONE
2. Lバンドリ！ — NEXT
- 境界再監査で `Lダブルアタック2 with OZS-1000＆RAPHAEL` と `スマスロ モンスターハンターライズ` は2024-11-18側へ移動。
- 2024-11-05群は現時点で2機をcanonical候補とする。`Lバンドリ！` 処理後、PB/地域先行/別型式/延期を再監査してCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規時系列収集を優先し、今回も旧レコードへの推測更新は実施していない。

## 次回再開地点
- 最新mainを再同期しNo.1682と本handoffを確認。
- **No.1683候補 `Lバンドリ！` — 2024-11-05** から性能コア + resetBehavior v0.7を収集する。
- `Lバンドリ！` 処理後に2024-11-05群の境界を再監査してCLOSED判定する。
- その後の主要境界候補は **2024-11-18**。現時点で `Lダブルアタック2 with OZS-1000＆RAPHAEL`、`スマスロ モンスターハンターライズ`、`スマート沖スロ 超華祭` を確認しているが、開始時に当時新台カレンダー・メーカー別一覧・PB/地域先行/別型式/延期を再監査して候補数を固定する。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
- 遊技通信/P-WORLD業界記事: https://news.p-world.co.jp/articles/28802/yugitsushin
- グリーンべると/P-WORLD業界記事: https://news.p-world.co.jp/articles/28808/greenbelt
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/3S1852/genre/201/
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4375/1/104540
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10113
- なな徹 スペック: https://nana-press.com/kaiseki/machine/833/24009/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/833/25105/
- なな徹 狙い目/リセット: https://nana-press.com/kaiseki/machine/833/25102/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/833/25106/
- 一撃 天井/朝一: https://1geki.jp/slot/l_hissatsu_shiokinin_crash/3/
- 一撃 機種解析TOP: https://1geki.jp/slot/l_hissatsu_shiokinin_crash/
- ALL7 2024年11月新台導入予定一覧: https://www.all7.jp/plans/index/2024/11
- 6号機一覧/月別導入整理: https://sulocale.sulopachinews.com/archives/43927
