更新日: 2026-09-08

## 現在地点
- recordCount: **1008**
- latestRecordAdded: **3×3EYES ～聖魔覚醒～**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-09-12_3x3eyes-seima-kakusei.md`
- chronologicalFrontier: **2016-09-12**
- frontierLatestMachine: **3×3EYES ～聖魔覚醒～**（大都技研）
- schema: **resetBehavior v0.7**
- status: **2016-09-12_GROUP_OPEN / NEXT_MACHINE_TENKAHUBU3**

## 今回の同期 / 境界監査
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1007 `2016-09-05_mirai-nikki.md` を再取得して開始。
- `INDEX.md` は19件時点の旧集約で、`LATEST_HANDOFF.md` は1007件まで更新済み。README規定に従い、LATEST_HANDOFF + 実レコード + 最新mainを進捗正本として使用した。
- 開始時点は recordCount 1007 / 2016-09-05群CLOSED / 次境界2016-09-06〜09-11。
- 09/06〜09/11について日付別・新台・導入・パチスロ等で再監査したが、全国導入本線として個別固定できる未登録パチスロは今回確認できなかったため、次の強い具体日 **2016-09-12** へ前進。
- 09/12群先頭として、大都技研公式が同日「全国導入開始！」と明記する **3×3EYES ～聖魔覚醒～** をNo.1008として登録。
- 同日候補 **天下布武3**（山佐）は、グリーンべるとが2016-09-11納品開始予定、一撃・ちょんぼりすた等が2016-09-12導入で一致しており、次未処理本線として固定。
- 09/12群はまだ **OPEN**。天下布武3処理後、同日全メーカー監査を行ってCLOSED可否を判定する。

## No.1008 — 3×3EYES ～聖魔覚醒～
- manufacturer: **大都技研**
- releaseDate: **2016-09-12**
- formalModelName: **3×3EYES／A7**
- certificationNumber: **5S0936**
- generation/system: **5号機 / ノーマルA / 技術介入機**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 通常/市場掲載機械割: **97.2 / 99.5 / 98.5(C) / 102.7 / 105.7%**（設定1 / 2 / C / 5 / 6）。
- 完全攻略時機械割: **100.6 / 102.6 / 109.7(C) / 106.5 / 110.2%**。通常値と別定義で保持。
- BIG: **1/337.8 / 321.3 / 682.7(C) / 306.2 / 303.4**。
- チャレンジBONUS: **1/489.1 / 461.5 / 99.9(C) / 397.2 / 313.6**。
- 合算: **1/199.8 / 189.4 / 87.1(C) / 172.9 / 154.2**。
- ベース: 代表値 **約41G/50枚**。詳細整理では **約40.8〜43.5G/50枚**。
- BIG最大 **350枚**（業界試打会記事の平均344枚）。
- チャレンジBONUS最大 **112枚**（同平均82枚）。
- 天井: **非搭載**。AT/ART/RT非搭載。

### resetBehavior v0.7
- 当時解析2系統で、設定変更時は **「特に影響なし」「恩恵は特になし」** と確認。
- 天井・周期・通常時ゲーム数モードを持たないため、設定変更/据え置き/純電断に関するゲーム数天井・短縮天井・宵越し天井価値は **NOT_APPLICABLE**。
- 朝一専用モード、固定高確、設定変更専用CZ/当選テーブル、公開リセット恩恵率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有のガックン、初期出目、ランプ、液晶等による設定変更/据え置き判別は、機種名表記揺れ・型式 `3×3EYES／A7`・大都技研・サザンアイズと「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」へ検索語を変えて再探索しても **NONE_CONFIRMED_AFTER_RESEARCH**。
- 純電源OFF→ONだけでの表示/リール固有挙動は直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。一般的なノーマル機挙動からは補完しない。
- 設定CはREG相当のチャレンジBONUSが **1/99.9** と極端に軽く、稼働後データから設定C自体は推測しやすいが、これは設定内容推測であり設定変更/据え置き判別とは分離。

### data quality
- 機械割は通常値と完全攻略値を平均せず、別定義として保存。設定Cでは **98.5% → 109.7%** と技術介入差が非常に大きい。
- ちょんぼりすた本文で設定1通常値の表示が `97.%` と欠ける箇所があるが、複数解析資料で **97.2%** が一致するためcanonicalは97.2%。
- BIG/REGの最大獲得枚数と業界試打会の平均獲得枚数も定義分離。

## 2016-09-12群 — OPEN
登録済み:
- **3×3EYES ～聖魔覚醒～**（大都技研） — No.1008

次未処理:
- **天下布武3**（山佐） — 2016-09-12導入を複数解析で確認。グリーンべると2016-08-23記事は09-11納品開始予定。

09/12同日については天下布武3処理後に全メーカー横断監査を実施する。

## 天下布武3 — 次回用先行確認
- manufacturer: 山佐
- releaseDate candidate: **2016-09-12**
- system: ボーナス + ART
- ART純増: **約1.7枚/G**
- ART初当たり: 設定1 **1/356.8** → 設定6 **1/213.1**
- 機械割: 設定1 **96.9%** → 設定6 **112.2%**（一撃掲載系列）
- ベース: **約38G/50枚**の当時整理あり。
- 天井: **ART間999GでART「覚醒」当選**。天下ボーナス/決戦ではリセットされない。
- 一撃のreset表: **設定変更＝天井G数リセット / 電源OFF→ON＝天井G数引継ぎ**。状態・液晶ステージは当時「調査中」。次回は別資料を追加探索してPARTIAL確定前に再照合する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_kengou-musashi.md**
- retroQaNextInspection: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規本線を優先し、遡及QA地点は変更なし。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1008を再取得。
2. **1008件 / 2016-09-12群OPEN → 天下布武3（山佐）**を次未処理本線としてNo.1009へ収集。
3. 天下布武3は性能コアに加え、設定変更/据え置き/純電断、ART間999G天井、内部状態、液晶ステージ、ガックン/変更判別、公開朝一数値を検索語・資料系統変更で再探索する。
4. 続いて09/12同日全メーカーを横断監査し、追加未登録機がなければ09/12群をCLOSEDへ進める。
5. 09月一覧候補 **パチスロスーパー海物語IN沖縄2 / ニューアイムジャグラーEX-KA / 乱嵐エイサー-30 / SLOT魔法少女まどか☆マギカ2** 等は月表記だけで日付を決めず、個別導入日を固定して時系列へ挿入する。
6. 遡及QAは `2006-03-27_golgo13-the-professional.md` から順次継続。
7. PARTIAL/UNVERIFIEDは最初の検索で確定せず、表記揺れ・型式・メーカー・シリーズ・設定変更/据え置き/電断/天井/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古DB・回顧資料を横断した後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1008 3×3EYES ～聖魔覚醒～
- 大都技研公式: https://www.daitogiken.com/contents/product/slot/33eyes/
- グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/8606/greenbelt
- P-WORLD: https://www.p-world.co.jp/machine/database/8138
- K-Navi: https://p-kn.com/slot/2589/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/23517/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/66/a.php
- けんのスロットシミュレーション: https://kenslo65536.com/kaiseki/eyes3x3.html
- CRANKY SEVEN: https://crankyseven.com/sazaneyes-pc.htm
- 必勝期待値クマぱぱ: https://xn--x9ja8p0go69l5jtgfm.com/33eyes-sazaneyes-2918
- スロパチクエスト: https://www.slopachi-quest.com/article/3x3eyes-settei/

### 境界 / 次候補
- グリーンべると 天下布武3: https://news.p-world.co.jp/articles/8602/greenbelt
- 一撃 天下布武3: https://1geki.jp/slot/s_tenkahubu3/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_tenkahubu3/3/
- ちょんぼりすた 天下布武3: https://chonborista.com/slot/yamasa-slot/23583/
