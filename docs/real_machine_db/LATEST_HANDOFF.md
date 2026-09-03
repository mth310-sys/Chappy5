# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **521**
- latestMachineAdded: **舞-HiME**（岡崎産業 / 全国一斉導入基準 2010-10-18）
- latestRecord: `docs/real_machine_db/machines/2010-10-18_mai-hime.md`
- chronologicalFrontier: **2010-10-18**
- frontierLatestMachine: **舞-HiME**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **520** / chronologicalFrontier **2010-10-16** / latestMachineAdded **天空のシンフォニア**。
- K-Navi 2010年10月導入カレンダーを再監査し、10月17日にパチスロ掲載がなく、次節点が **2010-10-18** であることを確認。
- 同日群は岡崎産業「舞-HiME」とニューアーク「ジャイアン」。repo検索で舞-HiME既登録なしを確認し、時系列優先で舞-HiMEを521件目として追加。
- 既登録性能値は再調査せず、新規対象の性能コア＋resetBehavior v0.7に限定して収集した。

## 521 — 舞-HiME

- メーカー: **岡崎産業**
- 全国一斉導入基準: **2010-10-18**（K-Navi）
- 世代/タイプ: **5号機 / ボーナス主体 + 完走型ループRT / CZ / 技術介入**
- 機械割: **97.37 / 99.22 / 101.15 / 105.01 / 109.03 / 115.46%**
- BIG合成: **1/322.84 → 1/215.58**
- ナギボーナス: **1/383.25 → 1/246.38**
- ボーナス合算: **1/175.23 → 1/114.98**
- 50枚/1000円: **36.98 / 37.18 / 37.39 / 37.65 / 37.99 / 39.51G**
- RT「アリッサゾーン」: **50G or 100G / 約+0.6枚/G**
- 舞衣/なつきBIG: 約300枚、命BIG: 約200枚、ナギボーナス: 最大109枚
- 天井: **なし**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — 舞-HiME

- **設定変更後はCZ「風華モード」からスタート**することをCrankySevenで直接確認。パチマガスロマガにも本機専用の「朝イチ・設定変更」項目が存在。
- 通常時のゲーム数天井は存在しないため、gameCounterReset / ceilingAfterReset は天井用途では **NOT_APPLICABLE**。
- 設定変更後に風華モードから始まるため、朝一からチャンス目成立で50G RTへ入る機会がある。ただし設定変更専用のRT当選率/期待度は確定できず、数値推定しない。
- 据え置き時の前日CZ/RT状態・RT残りGの保持、単純電源OFF→ON時のCZ/RT状態、ガックン・初期出目・液晶/ランプ等による変更判別は、表記/検索語/資料系統を変えて再探索しても本機固有の直接根拠を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 朝一風華モードだけで設定変更確定判別とはしない。据え置きでも前日の終了状態次第で風華モード開始となり得るかを直接確定できないため。
- 有利区間は5号機のため **NOT_APPLICABLE**。

## CONFLICT / 注意

- 機械割はP-WORLDの精密値とCrankySevenの丸め値が一致範囲で、CONFLICT扱いしない。
- パチンコ「CR舞-HiME」（西陣）や「舞-乙HiME」系の情報を混入させない。
- formalModelName / inspectionNumber は今回十分な再探索後も確定できず UNVERIFIED_AFTER_RESEARCH。

## 主要出典（取得日 2026-09-04）

- K-Navi 2010年10月導入カレンダー: `https://p-kn.com/calendar/201010/`
- K-Navi機種ページ: `https://p-kn.com/slot/1287/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6108`
- パチビー: `https://www.pachibee.jp/machines/about/210090001`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/62/okazaki_slot_62.php`
- パチマガスロマガ1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/62/c.php`
- CrankySeven: `https://crankyseven.com/maihime-pc.htm`

## 今回のGitHub更新

- 521 舞-HiME追加: `docs/real_machine_db/machines/2010-10-18_mai-hime.md`
- レコード追加commit: `b6087a43a74b63f21fae97e7dadb3d8f82fc0875`
- LATEST_HANDOFF: このコミット

## 遡及QA継続地点

- **ジャックポット・トロピカルバージョンまで補完済み**。
- machine tree上の次の候補は `docs/real_machine_db/machines/2006-11_kaidouou.md`。resetBehavior欠損なら次回QA対象。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 521 / chronologicalFrontier 2010-10-18**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを必ず再取得。
2. 2010-10-18同日群を継続し、repo重複を確認して **ニューアーク「ジャイアン」** を522件目候補として処理する。
3. 「ジャイアン」完了後、2010-10-19〜24境界をメーカー別/当時業界記事で監査する。
4. K-Navi 2010年10月カレンダーでは10月25日にパチスロ掲載なし（パチンコのみ）のため、次の未処理パチスロ節点は11月側を含めて再探索する。
5. 遡及QAは `2006-11_kaidouou.md` を次候補とする。
