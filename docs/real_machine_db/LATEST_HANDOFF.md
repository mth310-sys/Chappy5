更新日: 2026-09-14

## 現在地点
- recordCount: **1667**
- latestRecordAdded: **スマスロ ゲゲゲの鬼太郎 覚醒 — No.1667**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-08-05_gegege-no-kitaro-kakusei.md`
- chronologicalFrontier: **2024-08-05**
- schema: **resetBehavior v0.7**
- status: **2024-08-05_OPEN_1_OF_4_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1666を確認。INDEXは旧19件表示のためREADME規定どおり最新handoff + 実レコードを進捗正本として使用。
- 直前handoff指定のNo.1667候補 `スマスロ ゲゲゲの鬼太郎 覚醒` を性能コア + resetBehavior v0.7で登録。
- JFJ公式、Amusement Japan、HAZUSE、パチビー、必勝本、なな徹、ちょんぼりすた、パチナビ等を横断。
- 型式 `Lゲゲゲの鬼太郎 覚醒JC`、検定番号 `4S0089`、2024-08-05導入、設定1〜6のCZ/AT/機械割、約30.6〜31.0G/50枚、純増約5.0枚/Gを複数資料で照合。
- 設定変更時は有利区間・天井・内部状態・妖気ポイントをRESET。内部ゲーム数0〜150Gランダム加算により実質天井約1050〜1200G+α、天井到達時はATレベル2「激闘」開始、600G以内AT時はねこ娘CHANCE獲得抽選優遇。
- 据え置き/純電源OFF→ONでは有利区間・天井進行・ゲーム数・妖気ポイント・内部状態を引継ぎ。
- 本機固有ガックン、確定的リセット判別、600G以内ねこ娘CHANCE獲得率、純電断ステージ復帰規則は検索語・資料系統変更後も固定できずUNVERIFIED/PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## No.1667 — スマスロ ゲゲゲの鬼太郎 覚醒
- path: `docs/real_machine_db/machines/2024-08-05_gegege-no-kitaro-kakusei.md`
- manufacturer: **JFJ（藤商事グループ）**
- formalModel: **Lゲゲゲの鬼太郎 覚醒JC**
- inspectionCode: **4S0089**
- releaseDate: **2024-08-05**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / セット継続型AT**
- payoutRate: **97.9 / 98.9 / 100.3 / 105.6 / 110.8 / 114.9%**（設定1〜6）
- CZ: **1/222.3 / 1/219.8 / 1/217.0 / 1/206.8 / 1/197.2 / 1/191.6**
- AT: **1/421.1 / 1/413.6 / 1/403.4 / 1/378.5 / 1/361.7 / 1/349.8**
- base: **約30.6〜31.0G/50枚**
- netIncrease: **約5.0枚/G**
- AT: **1セット25G、初回墓場開始時40G保障 / 墓場約51%・激闘約62%・覚醒約80%継続**
- bonus: **ゲゲゲBONUS平均約150枚**
- ceiling: **通常1200G+α、設定変更時内部0〜150G加算で実打約1050〜1200G+α**
- reset: **有利区間・天井・内部状態・妖気ポイントRESET、内部G数0〜150Gランダム加算。**
- carryOver/powerCycle: **据え置き/純電源OFF→ONでは有利区間・天井進行・ゲーム数・妖気ポイント・内部状態を引継ぎ。**
- morning benefit: **最大150G実質短縮 / 天井到達時ATレベル2激闘開始 / 600G以内ATでねこ娘CHANCE獲得抽選優遇。**
- public morning numeric: **内部0〜150G加算 / 実質1050〜1200G+α / 600G以内優遇 / 設定変更時妖気pt天井は15〜30pt側が選ばれやすい公開傾向。**
- detection: **内部G加算による表示G数とのズレは推測材料。本機固有ガックン・確定判別はUNVERIFIED。**
- unresolved after research: **ガックン条件・率 / 確定リセット判別 / 600G以内ねこ娘CHANCE獲得率 / 純電断ステージ復帰規則 / 朝一専用モード振り分け**
- conflict: **固定専用短縮天井はないという表現と0〜150G内部加算による実質短縮は定義差。canonicalは内部加算方式として保持。**

## 2024-08-05境界 — OPEN 1/4
1. スマスロ ゲゲゲの鬼太郎 覚醒 — No.1667 DONE
2. L D4DJ Pachi-Slot Mix — NEXT
3. Lワンパンマン — QUEUED
4. スマスロ トロピカーナ — QUEUED

## 次回再開地点
- 最新mainを再同期しNo.1667と本handoffを確認。
- **No.1668候補 `L D4DJ Pachi-Slot Mix`（2024-08-05）** から性能コア + resetBehavior v0.7を収集。
- 続いて `Lワンパンマン` → `スマスロ トロピカーナ` の順で同日群を継続。
- 4機完了後、PB・別型式・地域先行・延期/段階導入を再監査して2024-08-05群CLOSED判定。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
- JFJ公式: https://www.fujimarukun.co.jp/products/l_gegege/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004371/
- HAZUSE: https://hazuse.com/hd/4s0089/
- パチビー 基本スペック: https://www.pachibee.jp/machines/index/224060010
- パチビー 攻略/リセット: https://www.pachibee.jp/machines/kouryaku/224060010
- パチ&スロ必勝本 設定変更時: https://hisshobon.com/machineinfo/84179/
- パチ&スロ必勝本 狙いドコロ: https://hisshobon.com/machineinfo/84207/
- パチ&スロ必勝本 有利区間: https://hisshobon.com/machineinfo/84180/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/782/23116/
- なな徹 天井: https://nana-press.com/kaiseki/machine/782/23263/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/213846/
- パチナビ 天井・ゾーン: https://pachinavi.net/machines/smasloth-kitaro-kakusei/tenjo/
