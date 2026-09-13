更新日: 2026-09-13

## 現在地点
- recordCount: **1563**
- latestRecordAdded: **スロット ソードアート・オンライン — No.1563**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-05-15_sword-art-online.md`
- chronologicalFrontier: **2023-05-15**
- frontierLatestMachine: **スロット ソードアート・オンライン — No.1563**
- schema: **resetBehavior v0.7**
- status: **2023-05-15_GROUP_CLOSED_1_OF_1_CANONICAL_PROCESSED / NEXT_NO1564_KACHO_KUMADA_KOSAKU_2023-05-22**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1562 `マイフラワー2-30` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- mainは会話上の前回地点No.1557より先行し、No.1562まで進んでいたため重複処理を避け、handoff指定の次機種 `スロット ソードアート・オンライン` をNo.1563として処理。
- 性能コア + resetBehavior v0.7を収集し、正式型式・検定番号・導入日・主要スペック・設定変更/据え置き/純電断・朝一公開数値を保存。
- 2023-05-15群を導入一覧・業界記事で再監査。canonical導入は `スロット ソードアート・オンライン` 1機で一致したためCLOSED。
- 次のcanonical導入日は2023-05-22。現時点knownは `課長 熊田工作 / パチスロ ジャベリン` の2機。

## No.1563 — スロット ソードアート・オンライン
- manufacturer: **大都技研**
- formalModel: **Lスロット ソードアート・オンラインB2**
- inspectionCode: **2S1694**
- releaseDate: **2023-05-15**
- generation/system: **6.5号機 / スマスロAT / CZ→疑似ボーナス→ボスバトル→差枚数管理AT / 上位AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.8 / 98.8 / 101.0 / 106.3 / 110.0 / 114.9%**
- CZ初当り: **1/154.6 / 1/151.4 / 1/145.3 / 1/130.9 / 1/122.9 / 1/114.2**
- ボーナス初当り: **1/356.2 / 1/343.3 / 1/321.1 / 1/266.1 / 1/236.3 / 1/207.7**
- baseGamesPer50: **約35G/50枚**
- netIncrease: **約2.5枚/G、上位ALO 約4.0枚/G**
- basicPayout: **SAO BONUS 20G/約50枚、EP BONUS 40G/約100枚、SAO 100枚以上、ALO 15G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_NUMBERS_AND_PARTIAL_POWER_CYCLE**

### resetBehavior v0.7 — No.1563
- 設定変更: **有利区間・天井・内部状態RESET**。CZモードテーブル、高確移行レベルシナリオを設定変更専用で再抽選。
- 据え置き: **有利区間・天井・内部状態CARRY_OVER**。
- 純電源OFF→ON: **天井・内部状態CARRY_OVER**を2023年当時の機種固有比較資料で確認。CZモードテーブル/有利区間単独契約は `UNVERIFIED_AFTER_RESEARCH`。
- 通常CZ間天井: **400G**。設定変更後の初回はランダム短縮抽選あり。完全G数振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- CZスルー天井: **最大6スルー→7回目CZでボーナス**。
- ボーナス間天井: **999G消化後の次回CZでボーナス**。
- 設定変更時高確移行シナリオ: **A 12.4% / B 25.0% / C 31.3% / D 31.3%**。C+Dは**62.6%**。
- 設定変更後1回目のボーナスが直撃当選した場合、**25%でエピソードボーナス**（全設定共通）。
- 有利区間ランプ非搭載。400G未満かつレア小役以外でのCZ当選は設定変更期待度UP材料だが確定判別ではない。
- 本機固有ガックン条件/発生率は検索語・資料系統を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- CONFLICT: 一部二次資料の下位AT純増約2.0枚/Gに対し、業界記事・複数解析は約2.5枚/Gで一致。**2.5枚/Gをcanonical**、2.0枚/Gを `CONFLICT_SECONDARY_TYPO_OR_DEFINITION_ERROR` として保持。

## 2023-05-15群 — CLOSED 1/1 canonical
1. スロット ソードアート・オンライン — No.1563 **DONE**

### 導入地域注記
- 全国canonical導入日は2023-05-15。
- 一部資料は北海道・九州等の地域導入を2023-05-22以降とするが、同一型式の地域差であり独立機種として別レコード化しない。

## 次導入境界 — 2023-05-22
現時点known:
1. **課長 熊田工作** — NET系 / オーゼキ製造候補。複数資料で2023-05-22導入。
2. **パチスロ ジャベリン** — 5/8表記資料との導入日CONFLICTあり。複数導入一覧/解析では2023-05-22をcanonical候補として再監査する。

### 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8スケジュール掲載 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 現状: `coreStatus: COMPLETE_CORE / qaResetBehavior: PARTIAL`
- 既存レコードには設定変更/据え置き/純電断時のモード・ローズマリー残G・AT状態を検索語/資料系統変更後も直接固定できなかった旨が保存済み。
- 次回QAでは重複探索を避け、追加一次/当時資料がなければ性能完了判定を維持したまま `PARTIAL_RESEARCH_EXHAUSTED` への正式化を検討。

## 今回の主要資料
### No.1563 スロット ソードアート・オンライン
- 遊技日本 / P-WORLD: https://news.p-world.co.jp/articles/23837/nippon
- グリーンべると導入記事: https://news.p-world.co.jp/articles/24079/greenbelt
- グリーンべると検定通過: https://web-greenbelt.jp/post-69689/
- HAZUSE: https://hazuse.com/machine/pachislot/2S1694/genre/202/
- パチビー: https://www.pachibee.jp/machines/index/223040000
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/490/14840/
- なな徹 天井: https://nana-press.com/kaiseki/machine/490/14838/
- 一撃 天井/設定変更: https://1geki.jp/slot/l_sao/3/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/84/kr07.php
- パチスロメソッド（2023-05-13）: https://slotmethod.jp/archives/16726/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/4040/1/92703
- K-Navi: https://p-kn.com/slot/3954/

### 2023-05-15 / 次境界監査
- 2023導入日一覧: https://www.slopachi-quest.com/article/2023-dounyuukisyu/
- グリーンべると SAO 5/15導入: https://news.p-world.co.jp/articles/24079/greenbelt
- 一撃 `課長 熊田工作` 紹介（5/22導入）: https://www.youtube.com/watch?v=GDE_AVmsGOU

## 保存コミット
- No.1563追加: `ca6c9b98d97b0afa3965f6900326d540807e1d65`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1564候補 `課長 熊田工作`（2023-05-22）から継続。その後 `パチスロ ジャベリン` を同日群として再監査し、PB・別型式・地域先行・延期/段階導入を確認して2023-05-22群のCLOSED可否を判定する。遡及QAは `2007-07-08_caribbean-queen.md`（カリビアンクイーン）から継続し、既存性能値はやり直さない。`L戦国BASARAギガZE` は2023-08-07境界で導入日CONFLICTを再監査する。**