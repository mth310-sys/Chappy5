# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **745**
- latestMachineAdded: **みんなのジャグラー**（北電子）
- latestRecord: `docs/real_machine_db/machines/2013-07-01_minnano-juggler.md`
- chronologicalFrontier: **2013-07-01**
- frontierLatestExactDateMachine: **みんなのジャグラー**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-07-01_GROUP__NEXT_NINJA_BLADE__NINJADAMASHII_II_NEWLY_DETECTED__FULL_SAME_DAY_AUDIT_REQUIRED**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-07-01_tairyo-ii.md` を再読。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **744** / chronologicalFrontier **2013-07-01** / 07-01群OPEN。
- HANDOFF指定の次候補 **みんなのジャグラー** をrepo重複確認後、745件目として追加。
- 07-01同日監査で、前HANDOFF既知の **NINJA BLADE（マルホン）** に加え、2013年当時資料から **忍魂弐（大都技研）** も2013-07-01導入候補として検出。repo検索で未登録を確認。07-01群はOPEN維持。

## 今回追加 — みんなのジャグラー

### identity / 性能コア

- manufacturer: **北電子**。
- releaseDate: **2013-07-01**。パチビー、HAZUSEで具体日確認。グリーンべると当時記事の6月30日納品開始と整合。
- 型式名: **みんなのジャグラーC** / 検定番号 **2S1401**。
- systemType: **5号機ノーマルAタイプ / 完全告知**。
- メーカー公表機械割: **97.2 / 98.1 / 99.2 / 101.6 / 104.6 / 109.8%**。
- BIG: **1/264.3 / 264.3 / 260.1 / 256.0 / 248.2 / 231.6**。
- REG: **1/455.1 / 409.6 / 390.1 / 343.1 / 283.7 / 244.5**。
- 合算: **1/167.2 / 160.6 / 156.0 / 146.6 / 132.4 / 118.9**。
- 50枚ベース: チェリー狙い **34.81～36.30G**、完全小役獲得 **35.32～36.85G**。条件別に分離保持。
- BIG: **約300枚**。
- REG: **約108枚**を本線。HAZUSEに平均約112枚表記があるためCONFLICTとして保持。
- 天井: **非搭載**。
- ART/AT/RT: **非搭載**。

### CONFLICT / 条件差

- メーカー公表機械割 **97.2～109.8%** とフル攻略機械割 **98.26～112.11%** は攻略条件差。平均せず別系列保存。
- REG実獲得: **約108枚**（当時業界/解析） vs **平均約112枚**（HAZUSE）。平均せずCONFLICT。

### resetBehavior v0.7

- ゲーム数解除・AT/ARTモード・CZ・天井を持たないため、それらの設定変更/据え置き/電断契約は **NOT_APPLICABLE**。
- 設定変更後、店側が1G回していなければ **朝一1G目にリールガックン**が発生するとする本機固有解析を複数系統で確認。ただし変更後1G回しで対策可能、個体差/停止位置の影響もあり確定判別ではない。
- 当時解析では、設定変更なしの電源OFF→ONのみの場合、1G連/ゾロ目ゲーム連時のBGM変化判定に用いるゲーム数履歴が引き継がれる。朝一最初のBIGで条件該当BGMが流れれば据え置き判断材料。逆回転フリーズBIGは例外。
- 設定変更時は上記BGM判定用ゲーム数履歴がクリアされるとする当時解析あり。
- 設定変更専用短縮天井/朝一CZ/AT優遇/モード振り分け: **NOT_APPLICABLE**。
- その他の本機固有内部状態、純電断時の物理リール挙動は、表記揺れ＋設定変更/リセット/朝一/ガックン/据え置き/電源OFF ON/電断/1G回しを組み替え、公式・業界・当時解析・古いDB・後年解析を再探索後も直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## 2013-07-01同日群

- 2013-07-01 **大漁II**（北電子）— 登録744件目。
- 2013-07-01 **みんなのジャグラー**（北電子）— 今回登録745件目。
- 2013-07-01 **NINJA BLADE**（マルホン）— 未登録。前HANDOFF確認済み。次回最優先。
- 2013-07-01 **忍魂弐**（大都技研）— 今回、当時資料から新規漏れ候補として検出。repo検索で未登録。
- 07-01群はまだ **OPEN**。K-Navi / ALL7 / メーカー別一覧 / 当時導入記事で他機種も最終監査すること。

## 遡及resetBehavior QA 進捗

- 本線収集を優先。既存性能値を最初からやり直していない。
- QAカーソルは既存方針を維持し、本線キューとは分岐しない。

## 次回再開地点

1. **recordCount 745 / chronologicalFrontier 2013-07-01 / 07-01群OPEN** から開始。
2. repo重複確認後、**2013-07-01「NINJA BLADE」（マルホン）**を746件目候補として性能コア + resetBehavior v0.7収集。
3. 続いて今回新規検出した **2013-07-01「忍魂弐」（大都技研）**を確認・収集。
4. K-Navi / ALL7 / メーカー別一覧 / 当時導入情報で07-01同日群を全メーカー横断監査し、他の未処理機種があれば時系列順に追加。
5. 漏れがなければ07-01群をCLOSEDし、その後の具体導入日へ前進。
6. みんなのジャグラーの未確定な本機固有内部状態/純電断物理リール挙動は後続QAで直接資料が見つかった場合のみ補完。

## 主要出典 — 取得日 2026-09-06

### みんなのジャグラー

- 北電子公式: `https://www.kitadenshi.co.jp/slot/minnanojuggler/`
- グリーンべると当時業界記事: `https://web-greenbelt.jp/00000978/`
- P-WORLD転載グリーンべると: `https://news.p-world.co.jp/articles/5892/greenbelt`
- パチビー: `https://www.pachibee.jp/movies/index/9535`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1401/`
- パチスロ解析ガイド: `https://pachislot-guide.net/2013/minnano-juggler/`
- 激アツ解析: `https://gekiatsu7.com/slot-analyze/2090/`
- 元プロMGジャグラーシリーズ整理: `https://www.pachislotblog.tokyo/juggler-series-specmatome/`
- 2013年当時 天井ハイエナ生活 / 天井非搭載・ガックン・電源ON/OFF時BGM履歴: `https://macerate.seesaa.net/article/367972105.html`

### 同日群 / 次候補

- 前HANDOFFのALL7 2013年7月一覧: `https://www.all7.jp/plans/index/2013/07`
- 2013年当時資料（7/1新台として忍魂弐・大漁II・みんなのジャグラーを記載）: `https://macerate.seesaa.net/article/367972105.html`
