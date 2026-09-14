更新日: 2026-09-14

## 現在地点
- recordCount: **1668**
- latestRecordAdded: **L D4DJ Pachi-Slot Mix — No.1668**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-08-05_d4dj-pachi-slot-mix.md`
- chronologicalFrontier: **2024-08-05**
- schema: **resetBehavior v0.7**
- status: **2024-08-05_OPEN_2_OF_4_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1667を確認。INDEXは旧19件表示のためREADME規定どおり最新handoff + 実レコードを進捗正本として使用。
- 直前handoff指定のNo.1668候補 `L D4DJ Pachi-Slot Mix` を性能コア + resetBehavior v0.7で登録。
- KYORAKU公式、遊技通信/グリーンべると、HAZUSE、なな徹、一撃、必勝本、ちょんぼりすた、スロパチクエスト等を横断。
- 型式 `LパチスロD4DJKB`、検定番号 `4S0424`、2024-08-05全国導入（直営フィールドテストは2024-07-26）、設定1〜6のCZ/AT/機械割、約34G/50枚、純増約1.3枚/Gまたは約4.3枚/Gを複数資料で照合。
- 設定変更時は有利区間・天井進行をRESETし、天井モード・CZモード・D4モード・内部状態を再抽選。据え置きは有利区間・天井・内部状態・内部モードを引継ぎ。
- 純電源OFF→ONでは天井までのゲーム数、天井モード、CZモード、D4モード、内部状態を引継ぐ。純電断時の液晶ステージ復帰はUNVERIFIED。
- 設定変更時内部状態振り分けを設定1〜6で収録。低確/通常/高確は設定1で70.3/19.9/9.8%、設定6で37.5/37.5/25.0%。
- 朝一モードB以上（最大555G相当）は約100件の全リセ実戦で最大557Gまでだったという強い補助データがある一方、必勝本は天井モード「再抽選」、正規振り分け非公開のため固定短縮天井としてcanonical化せずEMPIRICAL_SUPPORT_ONLY扱い。
- 本機固有ガックン、確定的リセット判別、設定変更時の天井/CZ/D4各モード正規振り分け、D4モード突入率は検索語・資料系統変更後も固定できずUNVERIFIED/PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 機械割設定1/2は精密値97.69/98.57%に対し必勝本97.6/98.5%の差をCONFLICT保持。設定3 ATは主要複数資料1/242.5に対しマルっとWAVE単独1/481.7をCONFLICT_LIKELY_SOURCE_TYPOとして保持。

## No.1668 — L D4DJ Pachi-Slot Mix
- path: `docs/real_machine_db/machines/2024-08-05_d4dj-pachi-slot-mix.md`
- manufacturer: **KYORAKU（京楽産業.）**
- formalModel: **LパチスロD4DJKB**
- inspectionCode: **4S0424**
- releaseDate: **2024-08-05**（直営フィールドテスト2024-07-26）
- generation: **6.5号機 / スマスロ**
- systemType: **AT / セット数管理型AT + 擬似ボーナス**
- payoutRate: **97.69 / 98.57 / 100.04 / 104.00 / 108.24 / 114.99%**（設定1〜6、通常丸め97.7 / 98.6 / 100.0 / 104.0 / 108.2 / 114.9%）
- CZ: **約1/112.2 / 1/110.9 / 1/109.6 / 1/104.4 / 1/103.6 / 1/99.9**
- AT: **約1/270.5 / 1/264.0 / 1/242.5 / 1/227.1 / 1/209.9 / 1/191.3**
- base: **約34G/50枚**
- netIncrease: **AT約1.3枚/G / 擬似ボーナス等約4.3枚/G**
- AT: **D4 FES. 1セット30G+α**
- bonus: **BIG約100枚 / SUPER BIG約150〜1000枚**
- ceiling: **モードA 777G / B 555G / C 444G / 天国111G → AT**
- reset: **有利区間・天井RESET、天井/CZ/D4モード・内部状態を再抽選。**
- carryOver: **据え置きは有利区間・天井・内部状態・内部モード引継ぎ。**
- powerCycle: **天井、天井モード、CZモード、D4モード、内部状態引継ぎ。**
- morning benefit: **一部でD4モード移行。内部状態を設定別再抽選。朝一モードB以上仮説は補助実戦データのみで確定解析扱いしない。**
- public morning numeric: **設定変更時内部状態振り分け（設定1 70.3/19.9/9.8%、設定6 37.5/37.5/25.0%ほか全設定収録）。モード別天井777/555/444/111G。**
- detection: **必勝本実戦上は設定変更後昼ステージ。確定判別・本機固有ガックンはUNVERIFIED。**
- unresolved after research: **ガックン条件/率 / 確定リセット判別 / 純電断時ステージ復帰 / 設定変更時天井モード振り分け / CZモード振り分け / D4モード突入率**
- conflict: **機械割設定1/2の精密値 vs 必勝本値、設定3 AT 1/242.5 vs マルっとWAVE 1/481.7。平均化せず保持。**

## 2024-08-05境界 — OPEN 2/4
1. スマスロ ゲゲゲの鬼太郎 覚醒 — No.1667 DONE
2. L D4DJ Pachi-Slot Mix — No.1668 DONE
3. Lワンパンマン — NEXT
4. スマスロ トロピカーナ — QUEUED

## 次回再開地点
- 最新mainを再同期しNo.1668と本handoffを確認。
- **No.1669候補 `Lワンパンマン`（2024-08-05）** から性能コア + resetBehavior v0.7を収集。
- 続いて `スマスロ トロピカーナ` を処理。
- 4機完了後、PB・別型式・地域先行・延期/段階導入を再監査して2024-08-05群CLOSED判定。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
- KYORAKU公式製品ページ: https://www.kyoraku.co.jp/product_site/2024/d4dj/
- KYORAKU公式NEWS（機種発表）: https://www.kyoraku.co.jp/news/detail/762
- KYORAKU公式NEWS（直営フィールドテスト）: https://www.kyoraku.co.jp/news/detail/761
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/27958/yugitsushin
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/27976/greenbelt
- HAZUSE: https://hazuse.com/hd/4s0424/
- なな徹 機種まとめ: https://nana-press.com/kaiseki/machine/787/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/787/23041/
- なな徹 内部状態: https://nana-press.com/kaiseki/machine/787/23043/
- なな徹 天井: https://nana-press.com/kaiseki/machine/787/23038/
- 一撃 天井・朝一: https://1geki.jp/slot/l_d4dj/3/
- 一撃 設定差: https://1geki.jp/slot/l_d4dj/0/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/84109/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/84111/
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/214667/
- スロパチクエスト: https://www.slopachi-quest.com/article/d4dj-tenjou/
- マルっとWAVE: https://marutto-w.com/industry_news/20240806
