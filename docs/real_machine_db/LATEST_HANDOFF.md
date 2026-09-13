更新日: 2026-09-13

## 現在地点
- recordCount: **1548**
- latestRecordAdded: **パチスロ 緋弾のアリアⅡ — No.1548**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-02-06_hidan-no-aria2.md`
- chronologicalFrontier: **2023-02-06**
- frontierLatestMachine: **パチスロ 緋弾のアリアⅡ — No.1548**
- schema: **resetBehavior v0.7**
- status: **2023-02-06_GROUP_OPEN_1_OF_2_KNOWN / NEXT_S_SENGOKU_MUSOU_3**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1546 `パチスロ モンスターハンターワールド：アイスボーン™` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり、最新handoffとmain実レコードを進捗正本として採用。
- No.1547 `S大花満SB / 大花満` を性能コア + resetBehavior v0.7で追加。
- 2023-01-30群をALL7 / K-Navi / 業界発表で再監査し、モンハンアイスボーン + 大花満の2機でCLOSED。
- 次の境界を2023-02-06へ進め、No.1548 `パチスロ 緋弾のアリアⅡ` を性能コア + resetBehavior v0.7で追加。
- 2023-02-06群は既知2機のうち1機処理済み。`S戦国無双3 ZYTCD` が未処理のためOPEN。

## No.1547 — S大花満SB / 大花満
- manufacturer: **ジェイピーエス**
- formalModel: **S大花満SB**
- inspectionCode: **2S1390**
- releaseDate: **2023-01-30（PB40法人向け初期納品）**
- generalSalePhase: **2023-04-03（一般販売分）**
- generation/system: **6.5号機 / メダルAT / 疑似ボーナス連チャン型PB機**
- 市場想定機械割: **98.0 / 98.7 / 100.3 / 102.0 / 104.8 / 107.0%（設定1〜6）**
- フル攻略: **99.0 / 99.8 / 101.3 / 102.9 / 105.9 / 108.0%**
- BIG: **1/434.1 → 1/352.5**
- REG: **1/695.9 → 1/482.3**
- 合算: **1/267.3 → 1/203.7**
- baseGamesPer50: **全設定37.0G/50枚**
- netIncrease: **BIG系約4.2枚/G / REG約2.0枚/G**
- basicPayout: **花満BONUS/超花満BONUS 約500枚、REG約50枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MODE_NUMBERS_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH**

### resetBehavior v0.7 — No.1547
- **設定変更**: 有利区間・天井G・内部モード・内部状態RESET。陽光ステージ開始。
- **据え置き**: 天井進行・内部モード・内部状態をCARRY_OVER。有利区間継続側天井契約を維持。
- **純電源OFF→ON**: 有利区間・天井・内部モード・内部状態をCARRY_OVER。陽光ステージへ戻るため外観だけでは変更判別不可。
- **天井短縮**: 通常A 1126→934G+α、通常B 582→390G+α。天国は192G+αのまま。
- **公開朝一モード振り分け**: 設定1=A30/B40/天国30%、設定5=A12/B40/天国48%、設定6=A1/B98/天国1%。設定2〜4は公開資料が調査中のため推測しない。
- **朝一恩恵**: 上記天井短縮、モード再抽選、初当たり時の超花満BONUS振り分け優遇。
- **変更判別**: パチマガスロマガは見た目から変更を見抜く手段なしと明記。本機固有ガックンは再探索後 `UNVERIFIED_AFTER_RESEARCH`。

### conflicts — No.1547
- 1gekiの見出しに通常時最大1192G+α表記がある一方、同ページのモード表・パチ7・P-WORLD・ちょんぼりすたは通常A1126G+αで一致。canonical=1126G+α、1192は `CONFLICT_SINGLE_HEADING_VALUE`。
- HAZUSE本文にメーカー「ジェイビーエス」表記があるが、検定通過・業界発表はジェイピーエス。canonical=ジェイピーエス。
- 1/30初期納品と4/3一般販売は同一型式の販売フェーズ差であり導入日CONFLICTにはしない。

## No.1548 — パチスロ 緋弾のアリアⅡ
- manufacturer: **JFJ製造 / 藤商事販売**
- formalModel: **S緋弾のアリアⅡJZ**
- inspectionCode: **230177**
- releaseDate: **2023-02-06**
- generation/system: **6.5号機 / メダルAT / 周期CZ経由・超高純増AT**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.6 / 103.1 / 106.0 / 110.1%（設定1/2/4/5/6）**
- AT初当たり: **1/445.2 / 1/392.1 / 1/320.3 / 1/272.9 / 1/243.4**
- baseGamesPer50: **約32.7〜33.6G/50枚**
- netIncrease: **約9.0枚/G**
- basicPayout: **初当たり時LBCで初期G数決定、平均約45.1G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_DEDICATED_MORNING_MODE_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH**

### resetBehavior v0.7 — No.1548
- **設定変更**: 有利区間・天井・モード・周期・7セグ・バレットRESET。専用「朝一モード」へ移行、ヘリ待機ステージ開始。
- **据え置き**: 有利区間・天井・モード・周期・7セグ・バレットCARRY_OVER。武偵ステージ開始。
- **純電源OFF→ON**: 7セグ表示値・周期・バレットCARRY_OVER、7セグ色は白復帰、通常時は武偵ステージ固定。純電断単独の有利区間状態は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **通常天井**: 最大10周期目CZ勝利濃厚。
- **リセット専用固定天井短縮**: なし確認。朝一モード自体も最大10周期。
- **朝一恩恵**: 設定変更後1周期目または2周期目でCZ当選濃厚、2周期以内AT期待度約60%。
- **変更判別**: ヘリ待機=設定変更、武偵=据え置きの主要判別材料。有利区間ランプ非搭載。本機固有ガックンは再探索後 `UNVERIFIED_AFTER_RESEARCH`。

## 2023-01-30群 — CLOSED 2/2
1. パチスロ モンスターハンターワールド：アイスボーン™ — No.1546
2. S大花満SB / 大花満 — No.1547

## 2023-02-06群 — OPEN 1/2 known
1. **パチスロ 緋弾のアリアⅡ（JFJ）** — No.1548 済
2. **S戦国無双3 ZYTCD（山佐ネクスト）** — 未処理

## 今回の主要資料
### No.1547
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/22687/greenbelt
- グリーンべると原記事: https://web-greenbelt.jp/post-67378/
- 遊技日本 検定通過: https://news.p-world.co.jp/articles/22456/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/2S1390/
- パチ7: https://pachiseven.jp/machines/6681/cutout/2
- パチマガスロマガ 朝一: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/50/kr01.php
- ちょんぼりすた: https://chonborista.com/slot/jps-slot/181312/
- 1geki: https://1geki.jp/slot/s_oohanaman/3/

### No.1548
- JFJ公式: https://www.fujimarukun.co.jp/products/s_aria2/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-55402/
- G-net 検定切れ: https://g-net-ps.com/content/kenteikire-2025-10-2/
- 必勝本: https://p.hisshobon.jp/machine/4039/1/93440
- なな徹 朝一: https://nana-press.com/kaiseki/machine/502/13458/
- 一撃 モード: https://1geki.jp/slot/s_aria2/45/
- 一撃 天井/電断: https://1geki.jp/slot/s_aria2/4/
- パチマガスロマガ AT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jfj_slot/03/at01.php

### 境界監査
- ALL7 2023年1月: https://www.all7.jp/plans/index/2023/01
- K-Navi 2023年1月: https://p-kn.com/calendar/202301/
- 2023新台導入日一覧（2/6候補）: https://pachinkopachisro.com/archives/57208678.html

## 保存コミット
- No.1547追加: `a4ffac6dfb288e24913b7c6a06ecd31e9f03da98`
- No.1548追加: `d73e8316dc5a570d6f7d7f99a4df9aed6a9dbd7e`
- handoff更新: 本コミット

## 次回再開地点
**No.1549候補 `S戦国無双3 ZYTCD`（山佐ネクスト）から継続する。正式型式・検定番号、性能コア、resetBehavior v0.7（設定変更/据え置き/純電断、周期・天井、モード/状態、有利区間、朝一恩恵、変更判別、公開朝一数値）を欠損判定前に検索語・資料系統を変えて再探索する。処理後、2023-02-06群をPB・別型式・地域先行・延期まで再監査してCLOSED判定する。既存No.1548以前の性能値はやり直さない。**
