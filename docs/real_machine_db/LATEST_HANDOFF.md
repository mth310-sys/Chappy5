更新日: 2026-09-08

## 現在地点
- recordCount: **980**
- latestRecordAdded: **ナイツ2**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-05-30_nights2.md`
- chronologicalFrontier: **2016-05-30**
- frontierLatestMachine: **ナイツ2**
- schema: **resetBehavior v0.7**
- status: **2016-05-30_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.979 `2016-05-30_suisei-no-gargantia.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点: recordCount 979 / chronologicalFrontier 2016-05-30 / 05-30群OPEN。
- HANDOFF指定の次未処理「ナイツ2」をGitHub検索し重複なし確認後、No.980として追加。
- 遡及QAは `2006-02_cutie-honey.md` を再探索し、性能側 `status: PARTIAL` は維持したまま reset QA のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。

## 2016-04-18群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.972 パチスロ マブラヴ オルタネイティヴ トータル・イクリプス（4/11 canonical、4/18資料CONFLICT保持。重複登録しない）
- No.973 スーパーストリートファイターIV パチスロエディション
- No.974 アステカ-太陽の紋章-
- No.975 ニューチバリヨ-30
- No.976 ニューチバリヨ（25Φ）
- No.977 スーパーリノMAX

### トリプルクラウンG-30 境界監査
- 月次回顧の「2016年4月」表記だけでは具体導入日を固定せず、複数後年DBの2016年6月表記を優先して **2016年6月群で再監査**。
- status: `DEFERRED_TO_2016_06_DATE_AUDIT`。

## 2016-04-19〜2016-05-29 — CLOSED_FOR_CURRENT_RESEARCH
- HAZUSE新台カレンダーでは4月最終群04/18の次が05/30。
- グリーンべると2016-02-12記事: 全日遊連が伊勢志摩サミット対応として **2016-05-02〜05-27** の全国一斉遊技機入替自粛を決定。
- K-Navi当時解説も5/30まで新台導入がない旨を説明。
- このため05/30より前へ月次資料だけを根拠に機種を前倒し配置しない。

## 2016-05-30群 — OPEN
登録済み:
- No.978 **パチスロ コードギアス 反逆のルルーシュ R2**（サミー）
- No.979 **パチスロ 翠星のガルガンティア**（D-light / ディ・ライト）
- No.980 **ナイツ2**（山佐）

次の未処理候補:
1. **めぞん一刻 桜の下で**（オリンピア）
2. **コクッチーブラック**
3. **パチスロ バルタン星人**
- 05/30群は上記以外も全メーカー横断で再監査し、漏れ確認後にCLOSED判定する。

## No.980 — ナイツ2
- manufacturer: **山佐**
- releaseDate canonical: **2016-05-30**
- formalModelName: **ナイツ2／CC**
- certificationNumber: **5S1311**
- generation/system: **5号機 / ノーマルA / リノシステム / リアルボーナス連チャン型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### identity / release date
- P-WORLD機種DBで型式 `ナイツ2／CC`、検定番号 `5S1311`、山佐、5号機ノーマルを確認。
- 2016年4月の検定通過一覧にも `ナイツ2/CC（山佐）` を確認。
- 一撃、P-Summa等で **2016-05-30** 導入予定を照合。グリーンべるとは5月下旬納品予定と報道しており整合。

### performanceCore
- 機械割: **96.8 / 99.1 / 100.1 / 102.0 / 105.1 / 107.0%**。
- ボーナス初当たり: **1/233.8 / 225.0 / 219.3 / 208.0 / 202.5 / 196.3**。
- BIG: **1/172.1 / 166.0 / 162.2 / 154.6 / 150.9 / 146.8**。
- REG: **1/255.2 / 246.3 / 240.7 / 229.5 / 224.1 / 217.6**。
- ベース: **約32G/50枚**。
- BIG: **約203枚** / REG: **約85枚**。
- ボーナス高確率中ボーナス確率: **約1/10**、ループ率目安 **約60%**。
- 天井: **非搭載**。

### resetBehavior v0.7
- 設定変更: **ボーナス高確率状態を引き継ぐ**と導入期の実戦攻略資料が直接報告。一般的な「設定変更=内部状態初期化」と異なるリノ系固有挙動。
- 据え置き/翌日: 前日ボーナス中または高確率中閉店台は、店側が状態転落まで回す対策をしない限り朝一高確率状態を狙えると当時資料が説明。
- 純電源OFF→ON: 一撃の当時解析は「調査中」。設定変更で状態引継ぎという事実から純電断の成立役・ランプ・全内部状態まで類推せず **UNVERIFIED_AFTER_RESEARCH**。
- 天井/ゲーム数: **NOT_APPLICABLE**。設定変更専用短縮天井もなし。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一価値: 「リセットで新たに優遇」ではなく **前日高確率状態が設定変更でも消えない** ことが中心。新台初日もメーカー出荷状態の高確率スタートが狙い目とされた。
- 変更判別: キャンドルランプは高確率状態示唆であり変更判別ではない。設定変更でも状態が残るため高確率スタート自体も変更証拠にならない。ガックン等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ランプと内部高確率状態の完全リンクは当時資料でも未確定なので、ランプ消灯だけで内部転落確定とはしない。

### data-quality notes
- 2016-04-29時点の一撃は設定変更詳細/電源OFF ONを「調査中」としている一方、導入期の実戦攻略資料は設定変更でも高確率状態引継ぎを報告。時系列上の未判明→後続実戦報告として扱い、数値CONFLICTとはしない。
- 性能コアは複数当時資料と後年整理で同一系列。重大CONFLICTなし。
- 純電断は直接比較根拠不足のためUNVERIFIEDを維持。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_cutie-honey.md**
- retroQaNextInspection: **2006-02-19_heisei-katsuo-densetsu.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規時系列収集を止めずQAリレーで補完。

### キューティーハニー QA結果
- 性能側 `status: PARTIAL` は維持。
- reset QAのみ **PARTIAL_RESEARCH_EXHAUSTED** へ更新。
- 「キューティーハニー / キューティーハニー3 / エレコ」「設定変更 / リセット / 据え置き / 電源OFF ON / 朝一 / ガックン / RT / キューティーゲーム」を分解・組合せ変更し、メーカー公式・HAZUSE・パチマガスロマガ・後年回顧を再横断。
- BIG後RT「キューティーゲーム」最大500G・約0.5枚/Gは再確認したが、設定変更/据え置き/純電断時の **RT残G数・内部RT状態・成立済みBIG状態** を直接固定できる本機固有資料は追加発見できず。
- ガックン等の本機固有変更判別も追加根拠なし。推測でRESET/CARRYOVERを埋めない。
- 通常時天井、朝一専用モード、設定変更専用短縮天井/当選優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。有利区間はNOT_APPLICABLE。

## 次回再開地点
1. **recordCount 980 / chronologicalFrontier 2016-05-30 / 05-30群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.980を最新mainから再取得。
3. 次の未処理は **2016-05-30 オリンピア「めぞん一刻 桜の下で」**。GitHub重複確認後、正式型式・検定・性能コア + resetBehavior v0.7を収集する。
4. 続いて **コクッチーブラック → パチスロ バルタン星人** を候補順に監査する。ただし具体導入日variant/重複を先に固定し、順序は資料に従って修正可。
5. 05/30群を全メーカー横断で再監査し、漏れ確認後にCLOSED判定する。
6. **トリプルクラウンG-30** は2016年6月群で具体導入日を再監査。
7. 遡及QAの次対象は **`2006-02-19_heisei-katsuo-densetsu.md`（平成カツヲ伝説）**。
8. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
9. 競合は平均せずCONFLICT/variant差/定義差/予定日vs実導入日/地域導入差として双方保存。

## safeguard
- INDEXは旧集約なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainを優先。
- 全国導入日と記事公開日・検定日・発表日・納品予定日・地域先行日を混同しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 通常機械割と完全攻略値を混ぜない。
- 後年の設置期限一覧の日付を全国導入日に転記しない。
- リノ系のボーナス高確率状態をRT/ART/ゲーム数モードと混同しない。

## 主要出典 — 取得日 2026-09-08
### No.980 ナイツ2
- P-WORLD: https://www.p-world.co.jp/machine/database/8030
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/8311/greenbelt
- P-Summa スペック: https://psumma.jp/pachislo/22282/
- P-Summa 検定通過: https://psumma.jp/pachislo/21837/
- ぱちんこドキュメント: https://pachinkolist.com/archives/48346096.html
- すろぱちくえすと設定差: https://www.slopachi-quest.com/article/night2-settei/
- 期待値見える化（朝一/設定変更）: https://slotjin.com/slot/nights/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_nights2/3/
- 一撃 立ち回り: https://1geki.jp/slot/s_nights2/5/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/210/yamasa_slot_210.php

### 遡及QA — キューティーハニー
- ユニバーサル公式: https://www.universal-777.com/product/slot/cutie_honey/
- HAZUSE: https://www.hazuse.com/i/det2/cutiehoney/top.htm
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/58/a.php
- 5号機クロニクル: https://5goki.com/universal
- 掘り出しモンみっけた!!: https://plaza.rakuten.co.jp/horida/16003/
