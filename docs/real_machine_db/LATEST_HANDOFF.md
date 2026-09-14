更新日: 2026-09-14

## 現在地点
- recordCount: **1723**
- latestRecordAdded: **Lパチスロ 機動戦士ガンダムSEED — No.1723**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-05-07_l-pachislot-mobile-suit-gundam-seed.md`
- chronologicalFrontier: **2025-05-07**
- schema: **resetBehavior v0.7**
- status: **2025-05-07_GROUP_OPEN_1_OF_3_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードを再同期。INDEXは旧表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1722 `L麻雀物語`（2025-04-21）を追加し、性能コア + resetBehavior v0.7を保存。保存後に項目名 `formalModel` の誤記もmain上で修正済み。
- 2025-04-21導入群を複数の導入一覧で再監査し、`吉宗 / スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ / L麻雀物語` の **3/3 CLOSED** と判定。
- 次の時系列境界が2025-05-07であることを情報島・HAZUSE等で確認。known canonicalは `Lパチスロ 機動戦士ガンダムSEED / スマスロ ようこそ実力至上主義の教室へ / スマスロ 緑ドン VIVA!情熱南米編 REVIVAL` の3機。
- No.1723 `Lパチスロ 機動戦士ガンダムSEED`（2025-05-07）まで処理。

## No.1722 — L麻雀物語
- path: `docs/real_machine_db/machines/2025-04-21_l-mahjong-monogatari.md`
- manufacturer: **オリンピアエステート / 平和**
- formalModel: **L麻雀物語S2**
- inspectionCode: **4S1564**
- releaseDate: **2025-04-21**
- payoutRate: **98.0 / 98.8 / 100.1 / 104.9 / 108.9 / 114.6%**
- initialHitCombined: **1/354.1 / 1/349.2 / 1/342.1 / 1/328.8 / 1/326.0 / 1/323.8**
- bonusInitial: **1/433.3 / 1/431.8 / 1/426.6 / 1/420.2 / 1/417.9 / 1/416.5**
- ATInitial: **1/615.2 / 1/600.3 / 1/580.5 / 1/545.5 / 1/537.9 / 1/531.4**
- base: **約32.0G/50枚**
- netIncrease: **約3.7枚/G**
- reset: **ボーナス間内部Gを300〜399G短縮、CZ間200G救済。純電断は天井G・内部状態を引継ぎ。**
- conflict: **設定変更後CZ「200G救済」と内部CZ短縮「0〜49G」の表現差を平均せず併記。**
- unresolved after research: **設定変更/据え置き/純電断の有利区間直接マッピング、設定変更時モード振り分け、高確開始率、固有ガックン。**

## 2025-04-21境界 — CLOSED 3/3 canonical
1. 吉宗 — No.1720 DONE
2. スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ — No.1721 DONE
3. L麻雀物語 — No.1722 DONE
- 情報島ほか導入一覧で再監査し、同日パチスロ3機で一致。PB・地域先行・別型式・延期/段階導入も検索範囲で追加canonicalを固定できずCLOSED。

## No.1723 — Lパチスロ 機動戦士ガンダムSEED
- path: `docs/real_machine_db/machines/2025-05-07_l-pachislot-mobile-suit-gundam-seed.md`
- manufacturer: **ビスティ / フィールズ**
- formalModel: **L機動戦士ガンダムSEED G**
- inspectionCode: **4S1799**
- releaseDate: **2025-05-07**
- payoutRate: **97.7 / 98.8 / 101.2 / 105.4 / 110.7 / 114.9%**
- CZ: **1/362.2 / 1/377.3 / 1/349.1 / 1/309.7 / 1/301.6 / 1/266.9**
- AT: **1/460.1 / 1/446.9 / 1/411.8 / 1/364.5 / 1/355.6 / 1/318.4**
- base: **約31.5G/50枚（設定1）**
- netIncrease: **約6.5枚/G**

## No.1723 resetBehavior v0.7
- settingChange: **有利区間・AT間天井・内部状態・モードをRESET/再抽選。AT間天井1280G+α→750G。初回CZ ATTACKマス配列優遇。**
- carryOver: **据え置きは有利区間・天井・内部状態・モードを引継ぎ。**
- powerCycle: **天井・内部状態・モードを引継ぎ。純電断時の有利区間だけは独立直接記述を固定できずUNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH。**
- mode: **通常A/B/C・天国A/B。設定変更時とST終了時に再抽選。天国は99G天井。**
- reset99GExpectation: **設定1〜6 = 31.86 / 32.04 / 32.61 / 34.80 / 35.45 / 38.99%**。
- advantageousSection: **通常の有利区間リセット時はラストフェーズミッション（成功期待度約58%）。設定変更時に同恩恵必発とは直接確認できないため朝一恩恵へ自動転記しない。**
- detection: **750G超え非当選、初回CZ配列、99G以内挙動が推測材料。固有ガックンは再探索後もUNVERIFIED_AFTER_RESEARCH。**
- conflict: **設定変更開始ステージは「市街地or沿岸」と「海岸」表記が競合。平均・強制統一せずCONFLICT保持。**

## 2025-05-07境界 — OPEN 1/3 known canonical
1. Lパチスロ 機動戦士ガンダムSEED — No.1723 DONE
2. スマスロ ようこそ実力至上主義の教室へ — NEXT
3. スマスロ 緑ドン VIVA!情熱南米編 REVIVAL — PENDING

## 次回再開地点
- 最新mainを再同期しNo.1723と本handoffを確認。
- **No.1724候補 `スマスロ ようこそ実力至上主義の教室へ` — 2025-05-07** から再開する。
- 続いて **No.1725候補 `スマスロ 緑ドン VIVA!情熱南米編 REVIVAL`** を処理。
- 2機処理後、PB・地域先行・別型式・延期/段階導入を再監査して2025-05-07境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、実体レコード順から最初のresetBehavior欠損レコードを安全に確定できた時点で遡及更新する。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- L麻雀物語 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/30316/yugitsushin
- L麻雀物語 HAZUSE: https://hazuse.com/hd/l4s1564/
- L麻雀物語 1geki: https://1geki.jp/slot/l_mjnmngtr/3/
- L麻雀物語 ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/231281/
- L麻雀物語 パチマガスロマガ: https://pachimaga.com/free/slot/olympiaestate/l_mahjongmonogatari.php
- ガンダムSEED 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/30635/yugitsushin
- ガンダムSEED HAZUSE: https://hazuse.com/hd/4s1799/
- ガンダムSEED ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/230587/
- ガンダムSEED 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/86829/
- ガンダムSEED 必勝本 モード: https://hisshobon.com/machineinfo/86812/
- ガンダムSEED 1geki: https://1geki.jp/slot/l_gundamseed/3/
- ガンダムSEED なな徹: https://nana-press.com/kaiseki/machine/930/29297/
- 情報島 導入一覧: https://p-johojima.jp/machine_spec/post-2074/
- HAZUSE 2025年5月導入一覧: https://hazuse.com/new-machine/202505-2/
