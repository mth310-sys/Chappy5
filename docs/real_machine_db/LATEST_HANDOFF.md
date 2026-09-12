更新日: 2026-09-13

## 現在地点
- recordCount: **1532**
- latestRecordAdded: **パチスロ鉄拳4アルティメットデビルVer. — No.1532**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-11-07_tekken4-ultimate-devil.md`
- chronologicalFrontier: **2022-11-07**
- frontierLatestMachine: **パチスロ鉄拳4アルティメットデビルVer. — No.1532**
- schema: **resetBehavior v0.7**
- status: **2022-11-07_GROUP_OPEN_3_OF_4_CORRECTED_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1531 `ラストユートピア` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり最新handoffとmain実レコードを進捗正本として扱った。
- 前handoffではNo.1532候補を `パチスロ幼女戦記` として2022-11-07群へ置いていたが、延期後資料を再監査した結果、同機の実導入日は **2022-12-05** で複数ソース一致。11/7へ誤登録せず12/5群へ繰り越した。
- 代わりに時系列上の未処理機 `パチスロ鉄拳4アルティメットデビルVer.` をNo.1532として性能コア + resetBehavior v0.7で追加。
- 型式 `Sパチスロ鉄拳4デビルバージョンTCD`、検定番号 `2S0327`、山佐製造 / 山佐ネクスト販売、2022-11-07導入を業界一次系・公安委員会検定再掲・複数解析で照合。
- 設定1/2/4/5/6の機械割は97.8/99.0/103.0/107.0/113.0%、CZは1/372.4→1/284.5、ATは1/636.4→1/362.3、ベース約31.0G/50枚、純増約7.0枚/G。
- 通常CZ天井は500G+α、設定変更後およびAT終了後は300G+αへ短縮。設定変更で有利区間・天井・内部状態RESET、据え置きでCARRY_OVERを複数解析で照合。
- 純電源OFF→ON時の本機固有契約、機種固有ガックン、設定変更専用の完全なモード/内部状態振り分けは検索語・資料系統を変えても固定できずUNVERIFIED/PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH。
- 同シリーズ2021年 `パチスロ鉄拳4デビルVer.` のリセット数値が検索に大量混在するため、別型式・別世代として本機へ転用しない。
- 2022-11-07境界を1geki月間導入カレンダー等で再監査し、スロット4機は `SLOTとある科学の超電磁砲 / 花火絶景 / パチスロ鉄拳4アルティメットデビルVer. / ラストユートピア` がcanonical。前handoffの `幼女戦記` を除外し、漏れていた `SLOTとある科学の超電磁砲` を追加した。

## No.1532 — パチスロ鉄拳4アルティメットデビルVer.
- manufacturer: **山佐製造 / 山佐ネクスト販売**
- formalModel: **Sパチスロ鉄拳4デビルバージョンTCD**
- inspectionCode: **2S0327**
- releaseDate: **2022-11-07**
- generation/system: **6.5号機 / AT / 高純増AT / CZ経由型**
- payoutRate: **97.8 / 99.0 / 103.0 / 107.0 / 113.0%**（設定1/2/4/5/6）
- CZ「ジャッジメントバトル」: **1/372.4 / 368.0 / 340.9 / 317.7 / 284.5**
- AT「デビルラッシュ」: **1/636.4 / 604.6 / 504.9 / 433.1 / 362.3**
- baseGamesPer50: **約31.0G/50枚（設定1）**
- netIncrease: **約7.0枚/G**
- JB経由AT期待獲得枚数: **約712枚（設定1）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_POWER_CYCLE_LOW_LEVEL**

### resetBehavior v0.7 — No.1532
- **設定変更**: 有利区間・天井・内部状態RESET。CZ天井を最大300G+αへ短縮。
- **据え置き**: 有利区間・天井・内部状態CARRY_OVER。
- **純電源OFF→ON**: 本機固有の直接契約を十分強い資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数・天井**: 通常500G+α → 設定変更後300G+α。天井恩恵はCZ当選でAT直撃ではない。
- **モード・状態**: 設定変更で再セット、据え置きで引継ぎ。朝一専用の完全振り分け表は未固定。
- **有利区間**: 設定変更でRESET。AT終了時はRESET/引継ぎ双方あり。JB敗北後は引継ぎとする解析あり。
- **朝一恩恵**: 主要な固定公開値はCZ短縮天井300G+α。
- **朝一不利**: 設定変更により前日の天井進行・状態は消失。それ以外の専用不利抽選はNONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: 本機解析では見た目の有利区間RESET/引継ぎ判別不可。機種固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 最大300G+αでCZ当選。

## 2022-11-07群 — OPEN 3/4 corrected canonical
1. **花火絶景（ミズホ）** — No.1530 済
2. **ラストユートピア（ピーセカンド / パイオニア）** — No.1531 済
3. **パチスロ鉄拳4アルティメットデビルVer.（山佐 / 山佐ネクスト）** — No.1532 済
4. **SLOTとある科学の超電磁砲（藤商事）** ← No.1533候補 / 次回最優先

### キュー訂正
- `パチスロ幼女戦記（サミー）`: 初期予定2022-11-07から延期。実導入 **2022-12-05**。11/7群から除外し12/5群候補として保持。
- `SLOTとある科学の超電磁砲（藤商事）`: 2022-11-07導入を月間カレンダーで確認。前handoffから漏れていたため11/7群へ追加。
- `SLOTとある科学の超電磁砲` 処理後、PB・別型式・地域先行・延期/段階導入を再監査し2022-11-07群のCLOSED可否を判定する。

## 遡及QA
- `docs/real_machine_db/machines/2007-03_pikagorou-v-b.md` はmain上ですでに2026-09-11 QA済みで `coreStatus: COMPLETE_CORE / resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED`。
- 次回も新規本線を止めず、必要時にピカゴロウV-Bより後の最初の未QA/PARTIALレコードをmainから再探索する。

## 今回の主要資料
### パチスロ鉄拳4アルティメットデビルVer.
- P-WORLD / 遊技通信（型式・製造元・純増）: https://news.p-world.co.jp/articles/21729/yugitsushin
- P-WORLD / 遊技通信（東京都公安委員会検定番号2S0327）: https://news.p-world.co.jp/articles/21279/yugitsushin
- P-WORLD / 遊技日本（11/7ホール導入）: https://news.p-world.co.jp/articles/22118/nippon
- グリーンべると: https://web-greenbelt.jp/post-62419/
- なな徹 機種概要: https://nana-press.com/kaiseki/machine/439/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/439/12562/
- なな徹 天井: https://nana-press.com/kaiseki/machine/439/12561/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_tekken4_ultimate/3/
- パチマガスロマガ スペック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/247/kh02.php
- パチマガスロマガ 天井: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/247/kr08.php
- K-Navi: https://p-kn.com/slot/3843/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/172589/

### 11/7境界 / 幼女戦記延期
- 一撃 2022年11月導入カレンダー: https://1geki.jp/newmachinecalender/202211/
- やんちゃプレス 幼女戦記（11/7→12/5延期明記）: https://www.yancha-press.com/26879/
- K-Navi 幼女戦記（ホール導入開始12/5）: https://p-kn.com/slot/3861/

## 次回再開地点
**本線はNo.1533候補 `SLOTとある科学の超電磁砲`（2022-11-07 / 藤商事）から性能コア + resetBehavior v0.7を収集する。同機完了後、11/7群をPB・別型式・地域先行・延期/段階導入まで再監査してCLOSED可否を判定する。`パチスロ幼女戦記` は11/7へ登録せず、延期後の実導入日2022-12-05群で処理する。**