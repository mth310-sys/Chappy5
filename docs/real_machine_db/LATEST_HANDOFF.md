更新日: 2026-09-08

## 現在地点
- recordCount: **1007**
- latestRecordAdded: **パチスロ未来日記**（EXCITE / ニューギン系）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-09-05_mirai-nikki.md`
- chronologicalFrontier: **2016-09-05**
- frontierLatestMachine: **パチスロ未来日記**（EXCITE）
- schema: **resetBehavior v0.7**
- status: **2016-09-05_GROUP_CLOSED_FOR_CURRENT_RESEARCH / NEXT_BOUNDARY_2016-09-06_TO_09-11**

## 今回の同期 / 境界監査
- 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1006 `2016-09-05_lost-planet2.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり LATEST_HANDOFF + 実レコード + 最新main を進捗正本として使用。
- 開始時点は recordCount 1006 / 2016-09-05群OPEN。handoff指定どおり次未処理 **パチスロ未来日記** をNo.1007として処理。
- 2016年9月の当時/後年導入一覧、機種別導入日、業界発表を横断監査。09/05全国導入本線として今回固定できたのは、既登録の **パチスロBLOOD+ 二人の女王 / パチスロ ロストプラネット2 / パチスロ未来日記** の3機種。
- 未来日記処理後、09/05群に追加の全国導入パチスロを固定できなかったため **2016-09-05_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とする。
- 次の強い具体日候補は **2016-09-12**。大都技研公式が「3×3EYES～聖魔覚醒～」について2016-09-12全国導入開始を明記。山佐「天下布武3」も複数解析で09-12導入を確認済み。まず09/06〜09/11境界監査を行い、追加がなければ09/12群へ進む。

## No.1007 — パチスロ未来日記
- manufacturer: **EXCITE（ニューギン系）**
- releaseDate: **2016-09-05**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ボーナス主体 + プチART「サバイバルZONE」**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL**

### performanceCore
- 機械割: **97.9 / 99.3 / 100.4 / 104.0 / 105.9 / 110.0%**。
- BIG: **1/299.3 / 293.9 / 291.3 / 276.5 / 265.3 / 261.1**。
- REG: **1/392.4 / 378.8 / 364.1 / 343.1 / 326.0 / 290.0**。
- 合算: **1/169.8 / 165.5 / 161.8 / 153.1 / 146.3 / 137.4**。
- ベース: **約35.8〜39.4G/50枚（ART含む設定差レンジ）**。別整理の代表値約37G/50枚は丸め値として定義分離。
- BIG最大 **約312枚**、REG最大 **約91枚**。
- プチART「サバイバルZONE」: **純増約0.6枚/G、平均約12.2G（設定1掲載値）**。
- 通常時ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- 天井非搭載のため設定変更/据え置き/純電断における天井ゲーム数、短縮天井、宵越し天井価値は **NOT_APPLICABLE**。
- 朝一専用固定モード、設定変更専用当選テーブル、リセット恩恵率は検索語・資料系統変更後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- サバイバルZONE等の一時状態について、設定変更/据え置き/純電源OFF→ONを直接比較する本機固有契約は十分な再探索でも固定できず **UNVERIFIED_AFTER_RESEARCH**。一般的なノーマル/A+RT機挙動から補完しない。
- 低確/高確等の朝一状態比較も **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有の確定ガックン、初期出目、ランプ、液晶等による変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

### data quality / conflicts
- 業界発表/P-WORLDは「Aタイプ/ノーマル」を強調、K-Navi/ちょんぼりすたはプチART搭載/A+ARTと表記。数値競合ではなく **CLASSIFICATION_LABEL_VARIANT_NORMAL_VS_A_PLUS_PETIT_ART** として保持。
- グリーンべるとの **2016-09-04納品開始予定** とK-Navi/解析の **2016-09-05ホール導入開始** はイベント定義差。releaseDate canonicalは09-05、09-04はdelivery startとして分離。
- 正式型式名/検定番号は「未来日記/パチスロ未来日記/EXCITE/エキサイト/ニューギン/型式/検定番号/5S/6S/回胴式遊技機/公安委員会」等へ再探索後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

## 2016-09-05群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- **パチスロBLOOD+ 二人の女王**（タイヨーエレック）
- **パチスロ ロストプラネット2**（オリンピア）
- **パチスロ未来日記**（EXCITE）

当時導入一覧・業界発表・機種別導入日を横断して今回追加本線を固定できなかったためCLOSED。後続QAで新しい一次資料が見つかった場合は再オープン可。

## 次の導入日候補
### 2016-09-12
先行確認済み:
- **3×3EYES ～聖魔覚醒～**（大都技研） — 大都技研公式が2016-09-12「全国導入開始！」を明記。K-Navi/複数解析も09-12一致。
- **天下布武3**（山佐） — 複数解析が2016-09-12導入で一致。

09月一覧上の他候補:
- パチスロスーパー海物語IN沖縄2（三洋物産）
- ニューアイムジャグラーEX-KA（北電子）
- 乱嵐エイサー-30（オーイズミ）
- SLOT魔法少女まどか☆マギカ2、その他後続機

各機種は導入日を個別固定して時系列に挿入する。月一覧だけで09-12扱いしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_kengou-musashi.md**
- retroQaNextInspection: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規本線を優先し、遡及QA地点は変更なし。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1007を再取得。
2. **1007件 / 2016-09-05群CLOSED → 2016-09-06〜09-11境界監査**を実施。
3. 境界に未登録全国導入機が固定できなければ **2016-09-12群OPEN → 3×3EYES ～聖魔覚醒～（大都技研）**を次未処理本線としてNo.1008へ収集。
4. 続いて同日候補 **天下布武3** および09月一覧機の個別導入日を監査し、09/12群を閉じる。
5. 遡及QAは `2006-03-27_golgo13-the-professional.md` から順次継続。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/据え置き/電断/天井/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古DB・回顧資料を横断した後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1007 パチスロ未来日記
- 日刊スポーツ / 娯楽産業: https://www.nikkansports.com/amusement/pachinko/news/1681991.html
- グリーンべると: https://web-greenbelt.jp/00008846/
- P-WORLD: https://www.p-world.co.jp/machine/database/8114
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/22861/
- K-Navi: https://p-kn.com/slot/2561/
- 期待値見える化: https://slotjin.com/slot-tool/mirainikki/
- A-SLOT: https://www.a-slot.com/SHOP/excite17.html

### 09月群監査 / 次候補確認
- 2016年スロット機種一覧: https://www.nikuziru.com/slot/2016slot-list
- 大都技研 3×3EYES公式: https://www.daitogiken.com/contents/product/slot/33eyes/
- K-Navi 3×3EYES: https://p-kn.com/slot/2589/
- ちょんぼりすた 3×3EYES: https://chonborista.com/slot/daito-slot/23517/
- ちょんぼりすた 天下布武3: https://chonborista.com/slot/yamasa-slot/23583/
- 一撃 天下布武3: https://1geki.jp/slot/s_tenkahubu3/
