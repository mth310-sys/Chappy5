更新日: 2026-09-14

## 現在地点
- recordCount: **1670**
- latestRecordAdded: **スマスロ トロピカーナ — No.1670**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-08-05_tropicana.md`
- chronologicalFrontier: **2024-08-05**
- schema: **resetBehavior v0.7**
- status: **2024-08-05_BOUNDARY_CLOSED_4_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1669を確認。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- 直前指定のNo.1670候補 `スマスロ トロピカーナ` を性能コア + resetBehavior v0.7で登録。
- ユニバーサル公式、P-WORLD/遊技日本、HAZUSE、P-WORLD機種DB、一撃、必勝本、なな徹、パチビー、ちょんぼりすた、スロパチクエスト、K-Naviを横断。
- 型式 `L／トロピカーナ／NT`、検定番号 `3S1646`、ミズホ、2024-08-05全国導入を照合。
- 本機は通常の設定1〜6ではなく、1段階設定 + 出玉率モード0〜7で性能が変動する特殊仕様。モード別出玉率/初当りを設定別に変換せずそのまま保持。
- 出玉率はmode0〜6で93.0/94.4/98.8/99.4/104.4/107.5/113.6%。mode7機械割は主要解析で未公開のため噂値を採用せず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- ボーナス初当りはmode0〜7で1/239.5, 1/264.7, 1/233.1, 1/265.6, 1/224.0, 1/247.2, 1/218.8, 1/235.4。ベース約31.9G/50枚、純増約6.0枚/G、BIG約204枚（約210枚表記も保持）、REG約105枚。
- mode7 REG確率はHAZUSE/P-WORLD系 `1/638.2` と、ちょんぼりすた `1/683.2` が競合。平均化せずCONFLICT。
- 通常ボーナス間天井777G、設定変更/有利区間リセット後は最大700Gへ短縮。
- 設定変更時の出玉率モード振り分けは0:12.5 / 1:20.3 / 2:0.8 / 3:0.8 / 4:2.3 / 5:3.1 / 6:10.2 / 7:50.0%。mode4以上65.6%（主要解析の約66%と一致）。
- 純電源OFF→ONは天井G数・出玉率モードを引継ぎ。内部状態も引継ぎとする解析比較あり。
- 朝一700G超でボーナス非当選なら据え置き濃厚材料。ただし有利区間移行タイミングによる若干のズレ注記あり。
- 本機固有ガックン、電断後の表示/ランプ復帰、トロピカループ間スルー回数の設定変更vs据え置き完全契約は検索語・資料系統変更後も固定できずUNVERIFIED。
- 2024年8月のパチスロ全国導入は主要新台カレンダーで8/5の4機のみ。8/19はパチスロ0機種を再確認し、2024-08-05境界をCLOSED判定。

## No.1670 — スマスロ トロピカーナ
- path: `docs/real_machine_db/machines/2024-08-05_tropicana.md`
- manufacturer: **ミズホ（ユニバーサルエンターテインメント）**
- formalModel: **L／トロピカーナ／NT**
- inspectionCode: **3S1646**
- releaseDate: **2024-08-05**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 完全告知・擬似ボーナスループ / 1段階設定＋出玉率モード変動**
- payoutRateByMode: **93.0 / 94.4 / 98.8 / 99.4 / 104.4 / 107.5 / 113.6 / mode7未公開**
- bonusByMode: **1/239.5 / 1/264.7 / 1/233.1 / 1/265.6 / 1/224.0 / 1/247.2 / 1/218.8 / 1/235.4**
- base: **約31.9G/50枚**
- netIncrease: **約6.0枚/G**
- basic: **BIG約204枚（約210枚表記あり） / REG約105枚 / 波乗りチャンス77G**
- ceiling: **通常777G / リセット後最大700G**
- reset: **天井RESET・700G短縮、出玉率モード再抽選、有利区間RESET。**
- carryOver: **据え置きは天井進行・出玉率モード引継ぎ。**
- powerCycle: **天井G数・出玉率モード引継ぎ。**
- morning benefit: **mode7 50.0%、mode4以上65.6%。**
- public morning numeric: **0=12.5 / 1=20.3 / 2=0.8 / 3=0.8 / 4=2.3 / 5=3.1 / 6=10.2 / 7=50.0%。**
- detection: **朝一700G超非当選は据え置き濃厚材料。ガックンはUNVERIFIED。**
- conflict: **mode7 REG 1/638.2 vs 1/683.2。BIG約204枚 vs 約210枚表記。mode7機械割は未公開。**

## 2024-08-05境界 — CLOSED 4/4
1. スマスロ ゲゲゲの鬼太郎 覚醒 — No.1667 DONE
2. L D4DJ Pachi-Slot Mix — No.1668 DONE
3. Lワンパンマン — No.1669 DONE
4. スマスロ トロピカーナ — No.1670 DONE

## 境界再監査
- 一撃2024年8月カレンダー: 8/5パチスロ4機、8/19パチスロ0機。
- K-Navi 2024年8月カレンダーも8/5上記4機、8/19はパチンコのみ。
- したがって通常全国導入の8月本線は4機でCLOSED。PB・地域先行・別型式については次回開始時にも漏れ防止監査を継続する。

## 次回再開地点
- 最新mainを再同期しNo.1670と本handoffを確認。
- 次の全国導入境界は **2024-09-02**。
- 現時点のknown canonicalは4機:
  1. **A-SLOT+ この素晴らしい世界に祝福を！** — No.1671候補 / NEXT
  2. **Lパチスロ閃乱カグラ2 SHINOVI MASTER**
  3. **パチスロ かぐや様は告らせたい**
  4. **パチスロL黄門ちゃま天**
- 一撃2024年9月カレンダーで2024-09-02スロット4機を確認。9/17はパチスロハイパーラッシュ1機。
- まずNo.1671候補 `A-SLOT+ この素晴らしい世界に祝福を！` から性能コア + resetBehavior v0.7を収集する。
- 4機処理後、PB・別型式・地域先行・延期/段階導入を再監査して2024-09-02群CLOSED判定。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
- ユニバーサル公式: https://www.universal-777.com/product/slot/tropicana/
- P-WORLD / 遊技日本 検定通過: https://news.p-world.co.jp/articles/26893/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/3S1646/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10064
- 一撃 朝一/設定変更: https://1geki.jp/slot/l_tropicana/3/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/84030/
- 必勝本 モード移行: https://hisshobon.com/machineinfo/84036/
- なな徹 天井/リセット: https://nana-press.com/kaiseki/machine/788/23211/
- パチビー: https://www.pachibee.jp/machines/kouryaku/224060008
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/214693/
- スロパチクエスト: https://www.slopachi-quest.com/article/tropicana-tenjou/
- 一撃 2024年8月新台カレンダー: https://1geki.jp/newmachinecalender/202408/
- K-Navi 2024年8月新台カレンダー: https://p-kn.com/calendar/202408/
- 一撃 2024年9月新台カレンダー: https://1geki.jp/newmachinecalender/202409/
