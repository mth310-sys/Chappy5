更新日: 2026-09-13

## 現在地点
- recordCount: **1561**
- latestRecordAdded: **パチスロ 炎炎ノ消防隊 — No.1561**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-05-08_s-fire-force.md`
- chronologicalFrontier: **2023-05-08**
- frontierLatestMachine: **パチスロ 炎炎ノ消防隊 — No.1561**
- schema: **resetBehavior v0.7**
- status: **2023-05-08_GROUP_OPEN_2_OF_3_CANONICAL_PROCESSED / NEXT_NO1562_MY_FLOWER2_30**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1560 `L主役は銭形4` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 直前handoff指定の次機種 `パチスロ 炎炎ノ消防隊` を2023年メダル6.5号機に限定し、2024年スマスロ版を混入させず調査。
- No.1561を性能コア + resetBehavior v0.7で追加。
- 遡及QAは `2007-06-25_morning-musume.md` を再探索し、性能側 `status: PARTIAL` を維持したまま reset QAのみ `PARTIAL_RESEARCH_EXHAUSTED` へ正式化。

## No.1561 — パチスロ 炎炎ノ消防隊
- manufacturer: **ジェイビー（SANKYO）**
- formalModel: **S炎炎ノ消防隊jS**
- inspectionCode: **2S1217**
- releaseDate: **2023-05-08**
- generation/system: **6.5号機 / メダルAT / 疑似ボーナス + 炎炎激闘**
- settings: **1 / 2 / 4 / 5 / 6 / L**
- payoutRate: **97.3 / 98.9 / 102.7 / 105.3 / 108.6%**（設定L 84.5%）
- 初当りボーナス: **1/243 / 1/240 / 1/224 / 1/218 / 1/208**
- 炎炎激闘初当り: **1/689 / 1/652 / 1/581 / 1/535 / 1/479**
- baseGamesPer50: **約33.2G/50枚**
- netIncrease: **疑似ボーナス中 約5.0枚/G**
- basicPayout: **炎炎BONUS 40G/約200枚、REGULAR BONUS・エピソードBONUSはベルナビ10回/平均約75枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMBERS_AND_PARTIAL_POWER_CYCLE**

### resetBehavior v0.7 — No.1561
- 設定変更: **有利区間・天井・内部状態・モードRESET**。
- 据え置き: **有利区間・天井・内部状態・モードCARRY_OVER**。
- 純電源OFF→ON: **天井・内部状態はCARRY_OVER**を機種固有比較資料で固定。モード・有利区間そのものは独立明示を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常最大天井: **850G+α**。
- 設定変更後最大天井: **650G+α**。
- 朝イチB: **250G+α**、天国: **88G+α**。
- 設定変更時モード: **朝イチA 約38% / 朝イチB 約27% / 天国 約35%**。
- 朝一119G以内ボーナス期待度 **約38%** とする解析あり。
- 250G以内の規定ゲーム数由来ボーナス当選率 **約62%** とする解析あり。レア役・十字目変換を含む実当選率とは定義分離。
- 650G+α超の初当り非当選は据え置き濃厚材料。88G/150G付近の前兆パターンも変更判別材料。
- 設定変更/据え置きとも通常時は第8特殊消防教会スタートで、開始ステージ単独判別不可。
- 有利区間ランプ判別不可。
- ガックンは個人実戦報告はあるが、固定仕様として採用できる高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- メニューG数/炎炎激闘回数は電断時間依存で表示リセット差があるため、内部天井契約と分離して保存。

## 2023-05-08群 — OPEN 2/3 canonical
1. L主役は銭形4 — No.1560 **DONE**
2. パチスロ 炎炎ノ消防隊 — No.1561 **DONE**
3. マイフラワー2-30 — **NEXT**

### 境界CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8更新スケジュール表記と、発売発表/実導入8/7の差。**2023-08-07へdeferしCONFLICT保持**。
- `パチスロ ジャベリン`: 一撃動画の5/8表記 vs なな徹・導入一覧の5/22。**2023-05-22をcanonical候補としてdeferし、5/22境界で再監査**。
- `課長 熊田工作`: 公式系/業界資料で5月下旬、パチビーで **2023-05-22**。5/8群には含めない。

## resetBehavior 遡及QA
### モーニング娘。 — `2007-06-25_morning-musume.md`
- 性能側 `status: PARTIAL` は維持。
- `qaResetBehavior` を **PARTIAL_RESEARCH_EXHAUSTED** へ正式化。
- 公式アーカイブで全ボーナス後CZ「モーニングチャンス」→特殊リプレイ→77G RT「モーニングタイム」を再確認。
- 設定変更/据え置き/純電断時のCZ・RT内部状態、77G RT残G、成立済み状態、機種固有ガックン/リール初動は検索語・資料系統を変えて再探索しても直接固定できず、一般的5号機RT挙動で補完しない。
- 有利区間: **NOT_APPLICABLE**。
- 通常時天井/朝一専用モード/リセット専用数値: **NONE_CONFIRMED**。

### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 現状: `coreStatus: COMPLETE_CORE / qaResetBehavior: PARTIAL`
- 性能完了判定は維持し、モード・ローズマリー残G/AT状態の設定変更・据え置き・純電断契約のみ再探索する。

## 今回の主要資料
### No.1561 パチスロ 炎炎ノ消防隊
- 遊技日本 / P-WORLD 販売発表: https://news.p-world.co.jp/articles/23232/nippon
- 遊技日本 / P-WORLD 先行映像: https://news.p-world.co.jp/articles/22991/nippon
- 一撃 リリース情報: https://1geki.jp/repo/20230202sankyo_a/
- パチビー: https://www.pachibee.jp/machines/index/223030003
- なな徹 解析まとめ: https://nana-press.com/kaiseki/machine/526/
- なな徹 設定別確率/機械割: https://nana-press.com/kaiseki/machine/526/13601/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/526/14738/
- なな徹 モード: https://nana-press.com/kaiseki/machine/526/15236/
- HAZUSE: https://hazuse.com/machine/pachislot/2S1217/genre/209/
- パチ＆スロ必勝本: https://p.hisshobon.jp/vpage/2523/2
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/182657/
- ぽこすろっと: https://www.nankaikoya.jp/enennoshouboutai-kitaichi/

### 遡及QA モーニング娘。
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/866/
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2007/06/morning-musume
- 既存保存資料（ALL7 / ORICON / P-WORLD / パチマガスロマガ旧ページ / 5号機クロニクル）も再参照。

## 保存コミット
- No.1561追加: `6582dde8f81f6c3b62d448701579397a19cc8028`
- モーニング娘。reset QA正式化: `1f315aa7f7002a908dea515136e7a05e2d3122af`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1562候補 `マイフラワー2-30`（2023-05-08）から継続。性能コア + resetBehavior v0.7を収集後、2023-05-08群をCLOSED再監査する。遡及QAは `2007-07-08_caribbean-queen.md`（カリビアンクイーン）から継続し、既存 `COMPLETE_CORE` は維持したままresetBehaviorだけを補完する。`パチスロ ジャベリン` は2023-05-22境界、`L戦国BASARAギガZE` は2023-08-07境界で導入日CONFLICTを再監査する。**
