更新日: 2026-09-14

## 現在地点
- recordCount: **1684**
- latestRecordAdded: **Lダブルアタック2 with OZS-1000＆RAPHAEL — No.1684**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-11-18_double-attack2-ozs1000-raphael.md`
- chronologicalFrontier: **2024-11-18**
- schema: **resetBehavior v0.7**
- status: **2024-11-18_BOUNDARY_OPEN_1_OF_3_CANONICAL_PROCESSED_WITH_CHOUKASAI_DATE_CONFLICT_QA_DEBT**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1682を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1683 `Lバンドリ！`（2024-11-05）を追加し、2024-11-05 canonical群は2/2処理完了。
- No.1684 `Lダブルアタック2 with OZS-1000＆RAPHAEL`（2024-11-18）を追加し、11月18日群へ進行。
- `スマート沖スロ 超華祭` はALL7・Pachibee・PachiSeven・一撃等で2024-11-18導入が優勢。一方、マルっとWAVEに11/05、K-Naviに11/04表記があるため、canonicalは11/18に置きつつ `CONFLICT_RELEASE_DATE_2024-11-18_VS_11-05_VS_11-04` を境界QA debtとして保持する。

## No.1683 — Lバンドリ！
- path: `docs/real_machine_db/machines/2024-11-05_l-bang-dream.md`
- manufacturer: **オリンピアエステート（オリンピア） / 総販売元 平和**
- formalModel: **LバンドリS11**
- inspectionCode: **430327**
- releaseDate: **2024-11-05**
- settings: **L / 2 / 3 / 4 / 5 / 6**
- payoutRate setting2-6: **97.6 / 98.9 / 105.2 / 110.0 / 112.5%**
- ST初当り setting2-6: **1/328.0 / 1/326.4 / 1/303.9 / 1/291.0 / 1/271.5**
- base: **約32.7G/50枚**
- netIncrease: **約4.7枚/G**
- normalCeiling: **最大10周期（平均約620G）**
- resetCeiling: **最大7周期（平均約430G）**
- resetMode: **モードB以上濃厚**
- resetWithin3CyclesStHitSetting2: **76.5%**
- settingChange: **有利区間・周期天井・内部状態・スターポイントRESET / モード再抽選 / スターポイント内部加算**
- carryOver: **有利区間・周期天井・内部状態・スターポイント・モード引継ぎ**
- powerCycle: **有利区間・周期天井・モード引継ぎを別系統で確認。内部状態/スターポイント全項目はANALYSIS_SINGLE_CAUTION**
- detection: **7周期超AT非当選は据え置き濃厚材料 / 有利区間ランプ判別不可 / ガックンUNVERIFIED**
- conflict: **設定2機械割 97.6%（主要複数） vs 97.5%（HAZUSE）**。また必勝本の天井ページに他機種由来と思われる項目混入があるため汚染項目をcanonicalに使用していない。

## No.1684 — Lダブルアタック2 with OZS-1000＆RAPHAEL
- path: `docs/real_machine_db/machines/2024-11-18_double-attack2-ozs1000-raphael.md`
- manufacturer: **オーイズミ**
- formalModel: **Lダブルアタック2EX**
- inspectionCode: **430240**
- releaseDate: **2024-11-18**
- payoutRate: **97.8 / 99.3 / 101.9 / 105.0 / 108.7 / 111.5%**
- AT初当り: **1/259.9 / 1/250.3 / 1/237.1 / 1/217.4 / 1/200.2 / 1/189.5**
- base setting1-6: **約33.4 / 33.7 / 34.0 / 34.4 / 34.7 / 35.0G/50枚**
- netIncrease: **通常AT 約2.5枚/G / 上位AT 約5.0枚/G**
- normalGameCeiling: **999G+α**
- normalSymbolCeiling: **最大63回**
- resetSymbolCeiling: **最大47回**
- settingChange: **有利区間・ゲーム数/シンボル天井・内部状態・モードRESET / 通常B以上**
- carryOver: **有利区間・天井・状態・モード引継ぎ**
- powerCycle: **ゲーム数天井・シンボル回数・状態・モード・有利区間引継ぎ**
- resetMode setting1: **通常B37.1 / チャンスA37.5 / チャンスB12.5 / 天国12.5 / 超天国0.4%**
- resetMode setting6: **通常B22.3 / チャンスA45.3 / チャンスB18.8 / 天国12.5 / 超天国1.2%**
- detection: **朝一47シンボル超AT非当選は据え置き濃厚材料 / 開始ステージ・ガックンUNVERIFIED**

## 2024-11-05境界 — CANONICAL CLOSED 2/2
1. L 新・必殺仕置人 回胴 CRASH SPEC — No.1682 DONE
2. Lバンドリ！ — No.1683 DONE
- `スマート沖スロ 超華祭` の11/05表記資料は存在するが、複数の機種専用/導入一覧で11/18が一致するため本線は11/18へ置く。日付競合は消さずQA debtとして保持。

## 2024-11-18境界 — OPEN
1. Lダブルアタック2 with OZS-1000＆RAPHAEL — No.1684 DONE
2. スマスロ モンスターハンターライズ — NEXT
3. スマート沖スロ 超華祭 — PENDING / RELEASE DATE CONFLICT QA
- 3機処理後、PB/地域先行/別型式/延期・段階導入を再監査してCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規時系列収集を優先し、今回も旧レコードへの推測更新は実施していない。

## 次回再開地点
- 最新mainを再同期しNo.1683/1684と本handoffを確認。
- **No.1685候補 `スマスロ モンスターハンターライズ` — 2024-11-18** から性能コア + resetBehavior v0.7を収集する。
- その後 `スマート沖スロ 超華祭` を処理し、導入日競合（11/18 vs 11/05 vs 11/04）をレコード内にも明示する。
- 11/18群完了後、当時新台カレンダー・メーカー別一覧・PB/地域先行/別型式/延期を再監査して次境界へ進む。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
### Lバンドリ！
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-66472/
- Amusement Japan/P-WORLD: https://news.p-world.co.jp/articles/28735/amusement
- HAZUSE: https://hazuse.com/hd/430327-2/
- パチ&スロ必勝本 基本: https://hisshobon.com/machineinfo/84765/
- パチ&スロ必勝本 天井/設定変更（ページ混入注意）: https://hisshobon.com/machineinfo/84763/
- 一撃: https://1geki.jp/slot/l_bang_dream/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/823/25149/
- なな徹 天井: https://nana-press.com/kaiseki/machine/823/25146/
- スロぱちクエスト: https://www.slopachi-quest.com/article/bangdream-tenjou/
### Lダブルアタック2
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/28758/yugitsushin
- Amusement Japan/P-WORLD: https://news.p-world.co.jp/articles/28770/amusement
- P-Summa: https://psumma.jp/featured/62886/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0090/
- パチ&スロ必勝本: https://p.hisshobon.jp/vpage/2655/2
- なな徹 朝一: https://nana-press.com/kaiseki/machine/832/25289/
- なな徹 モード: https://nana-press.com/kaiseki/machine/832/25285/
- スロぱちクエスト: https://www.slopachi-quest.com/article/watack2-tenjou/
### 境界
- ALL7 2024年11月: https://www.all7.jp/plans/index/2024/11
- マルっとWAVE（超華祭11/05表記）: https://marutto-wave.jp/new_machine/20241105/
