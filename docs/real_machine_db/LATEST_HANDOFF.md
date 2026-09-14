更新日: 2026-09-14

## 現在地点
- recordCount: **1703**
- latestRecordAdded: **Lパチスロ シン・エヴァンゲリオン — No.1703**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-01-20_l-pachislot-shin-evangelion.md`
- chronologicalFrontier: **2025-01-20**
- schema: **resetBehavior v0.7**
- status: **2025-01-20_GROUP_OPEN_4_OF_6_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、既存直前レコードを再同期。INDEXは旧表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- main上でNo.1701 `A-SLOT+ ディスクアップ ULTRAREMIX`、No.1702 `Lにゃんこ大戦争 超神速` を確認。
- No.1703 `Lパチスロ シン・エヴァンゲリオン` を追加し、性能コア + resetBehavior v0.7を収録。
- No.1701の並行作業による重複パス `2025-01-20_aslot-plus-discup-ultraremix.md` を検知し、正本 `2025-01-20_a-slot-plus-disc-up-ultraremix.md` を残して重複のみ削除。recordNo重複を解消した。

## No.1701 — A-SLOT+ ディスクアップ ULTRAREMIX
- canonicalPath: `docs/real_machine_db/machines/2025-01-20_a-slot-plus-disc-up-ultraremix.md`
- manufacturer: **Sammy（販売/ブランド） / タイヨーエレック（製造）**
- formalModel: **L DISCUPウルトラリミックス XR**
- inspectionCode: **4S1442**
- releaseDate: **2025-01-20**
- settings: **1 / 2 / 5 / 6（設定Lは通常比較から分離）**
- payoutRate: **99.3 / 100.2 / 103.6 / 107.7%**、完全攻略 **103.0 / 103.8 / 107.2 / 111.5%**
- bonus: **BIG 1/287.2→1/260.9 / REG 1/495.3→1/334.1 / 合算1/181.8→1/146.5**
- base: **約32.2G/50枚**
- netIncrease: **DZ/DT約0.5枚/G、DTR約1.5枚/G、擬似BONUS約6.5枚/G**
- reset: **天井非搭載。設定変更で有利区間RESET、据え置きCARRY_OVER。設定変更/電源OFF→ONともガックンなし、REMIXモード・メニュー初期化のため単独判別不可。**

## No.1702 — Lにゃんこ大戦争 超神速
- path: `docs/real_machine_db/machines/2025-01-20_l-nyanko-daisensou-choushinsoku.md`
- manufacturer: **KYORAKU**
- formalModel: **Lにゃんこ大戦争・超神速KB**
- inspectionCode: **4S1157**
- releaseDate: **2025-01-20**
- settings: **1 / 2 / 4 / 5 / 6（設定L搭載）**
- payoutRate: **97.5 / 98.3 / 104.3 / 109.4 / 114.9%**
- initialHit: **CZ 1/544→1/461 / AT 1/395→1/303**
- base: **約32.5G/50枚**
- netIncrease: **約9.0枚/G**
- reset: **通常最大1122G+α→設定変更後922G+αへ短縮。モード再抽選・狂乱状態RESET・有利区間RESET。純電断は天井G/モード/狂乱状態を引継ぎ。**
- publicMorning: **222G+α特殊天井あり（高設定ほど優遇、設定別率未公開）。**

## No.1703 — Lパチスロ シン・エヴァンゲリオン
- path: `docs/real_machine_db/machines/2025-01-20_l-pachislot-shin-evangelion.md`
- manufacturer: **ビスティ（製造） / フィールズ（販売）**
- formalModel: **Lシン・エヴァンゲリオン**
- inspectionCode: **4S1192**
- releaseDate: **2025-01-20**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **98.2 / 99.2 / 101.5 / 105.4 / 110.2 / 114.9%**
- initialHit: **1/291.1 / 1/283.5 / 1/264.5 / 1/236.6 / 1/224.8 / 1/212.5**
- base: **約33.1G/50枚**
- netIncrease: **作戦ST約0.1枚/G、擬似ボーナス/上位AT約5.0枚/G**
- basicPayout: **BIG約150枚+α / SUPER BIG約300枚+α / SPECIAL BONUS約150枚+α / 裏CODE:999 999枚**
- reset: **設定変更で天井RESET、朝イチモード固定、状態再抽選、ナビポイントRESET、有利区間RESET。**
- ceiling: **通常A最大800G+α→朝イチ650G+α。ボーナス間1200G天井。**
- powerCycle: **天井G・モード・状態・ナビポイントを引継ぎ、液晶表示のみ初期化。**
- publicMorning: **朝イチ150G以内の規定G数選択率35.2%（全設定共通）。**
- resetDetection: **650G+α超でST/ボーナス非当選なら据え置き濃厚材料。ガックンは再探索後もUNVERIFIED。**

## 2025-01-20境界 — OPEN 4/6 known canonical
1. スマート沖スロ スターハナハナ — No.1700 DONE
2. A-SLOT+ ディスクアップ ULTRAREMIX — No.1701 DONE
3. Lにゃんこ大戦争 超神速 — No.1702 DONE
4. Lパチスロ シン・エヴァンゲリオン — No.1703 DONE
5. L島娘 — NEXT
6. 七つの魔剣が支配する — QUEUED
- 6件処理後にPB・地域先行・別型式・延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1703と本handoffを確認。
- **No.1704候補 `L島娘` — 2025-01-20** から再開する。
- 続いて `七つの魔剣が支配する` を処理し、2025-01-20境界の追加漏れ監査を行う。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、QAリレー時に同カーソル直後の最初のresetBehavior欠損レコードを確定して遡及更新する。

## 今回の主要ソース
取得日: 2026-09-14
### Lパチスロ シン・エヴァンゲリオン
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/30020/greenbelt
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/29945/yugitsushin
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2678/2
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/85915/
- 必勝本 モード: https://hisshobon.com/machineinfo/85897/
- なな徹 モード: https://nana-press.com/kaiseki/machine/893/26809/
- 1geki 朝一: https://1geki.jp/slot/l_shin_eva/3/
