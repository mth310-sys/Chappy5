更新日: 2026-09-10

## 現在地点
- recordCount: **1166**
- latestRecordAdded: **南国物語 TYPE-A**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-01-09_nangoku-monogatari-type-a.md`
- chronologicalFrontier: **2018-01-09**
- frontierLatestMachine: **南国物語 TYPE-A — No.1166**
- schema: **resetBehavior v0.7**
- status: **2018-01-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT__NEXT_CONFIRMED_2018-01-22**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1164 `SLOT魔法少女まどか☆マギカA`を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1164件 / chronologicalFrontier 2017-12-18 / 2017年末到達**。
- 2017-12-19〜12-31境界について、直前handoffの複数カレンダー監査結果を継承し、今回の2018年カレンダーでも次の全国導入が2018-01-09であることを再確認。
- 2018-01-09群は複数年次導入カレンダーが **コードギアスR2 C.C.ver. / 南国物語 TYPE-A** の2機種で一致。
- No.1165 `パチスロ コードギアス反逆のルルーシュR2 C.C.ver.`、No.1166 `南国物語 TYPE-A` をperformance core + resetBehavior v0.7で追加。
- 2機種ともmainに新規レコードが存在しなかったことを確認してから登録し、既存性能値の無駄な再調査・重複登録を避けた。
- よって **2018-01-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## No.1165 — パチスロ コードギアス反逆のルルーシュR2 C.C.ver.
- path: `docs/real_machine_db/machines/2018-01-09_code-geass-r2-cc-ver.md`
- manufacturer: サミー（製造元: ロデオ）
- releaseDate: 2018-01-09
- generation/system: 5.9号機 / A+RT / GRT / 技術介入
- formalModelName: `コードギアスR2C.C.／ZS`
- certificationNumber: `7S1251`
- 通常機械割: **97.8 / 99.0 / 102.6 / 105.5 / 109.3 / 112.0%**
- 完全攻略: **99.4 / 100.7 / 104.4 / 107.3 / 111.1 / 113.9%**
- BIG合成: **1/332.7 → 1/264.3**
- MB合成: **1/500.3 → 1/344.9**
- ボーナス合算: **1/199.8 → 1/149.6**
- 50枚ベース: 約**32G**
- RT純増: 約**0.2枚/G**
- 基本獲得: GBB252枚+無限RT / HBB最大250枚+RT150G / NBB最大205枚+RT150G / MB最大70枚+RT50G+α
- 天井: **なし**

### resetBehavior v0.7
- 一撃の本機専用「天井/設定変更」資料を取得。
- 設定変更: **学校ステージ / RT状態RESET**。
- 純電源OFF→ON: **学校ステージ / RT状態CARRYOVER**。
- 開始ステージは同一なので、それ単独では変更判別不可。
- 天井非搭載、朝一専用天国/高確/初当たり優遇は確認なし。
- ガックン検索では2016年ART機`コードギアスR2`の情報が大量混入したため、C.C.ver./ZS/2018/GRTを含めて再探索。C.C.ver.固有の直接契約は固定できず`UNVERIFIED_AFTER_RESEARCH`。旧R2の値は転記しない。
- 有利区間は公開GRTゲーム性上、朝一客AI用の比較値として`NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`。

## No.1166 — 南国物語 TYPE-A
- path: `docs/real_machine_db/machines/2018-01-09_nangoku-monogatari-type-a.md`
- manufacturer: オリンピア
- releaseDate: 2018-01-09
- generation/system: 5号機 / ノーマルA / 完全告知 / 4段階設定(1/2/5/6)
- formalModelName: `南国物語Type-A／F1`
- certificationNumber: `7S1020`
- 完全攻略機械割: **98.1 / 101.1 / 106.2 / 112.2%**
- BIG: **1/268.6 / 257.0 / 237.4 / 217.7**
- REG: **1/496.5 / 455.1 / 399.6 / 346.8**
- 合算: **1/174.3 / 164.3 / 148.9 / 133.7**
- 50枚ベース: 約**34.3〜36.5G**
- 基本獲得canonical: **BIG最大312枚 / REG最大117枚**
- 天井/RT: **なし**

### resetBehavior v0.7
- ボーナス回数カウンタは**設定変更・純電源OFF→ONとも0へリセット**。
- BIG中BGMの3回目/7回目示唆は当日カウントとして利用できるが、純電断でも0になるため設定変更専用判別ではない。
- 天井/高確/モード/RTはゲーム性上N/Aまたは確認なし。
- 本機固有ガックン/初期出目/ランプの決定的変更判別は検索語・型式・メーカー・資料系統変更後も`UNVERIFIED_AFTER_RESEARCH`。
- 獲得枚数はHAZUSE/P-WORLD **312/117枚** 対5号機クロニクル **311/116枚**。平均せず`CONFLICT_SECONDARY_PAYOUT_311_116_VS_312_117`、312/117をcanonical。

## 2018-01-09群監査
- 真パチスロ備忘録2018年導入一覧: 1/9はコードギアスR2 C.C.Ver、南国物語Aタイプの2機種。
- 2-9伝説系導入カレンダー: 同じ2機種。
- HAZUSE/K-Navi/当時解析でも両機の2018-01-09導入を個別確認。
- 決定的な同日未登録別スペックは今回確認されず、群CLOSE。

## 次の確認済み導入群
- **2018-01-22**
  - `パチスロ烈火の炎 Flame of Recca` — ニューギン。パチ7で2018-01-22、ノーマル+RT、天井なし、RT20G/50G/無限・純増約0.3枚/Gまで先行確認。
  - `ヱヴァンゲリヲン30Φ` — ビスティ。すろかいで2018-01-22、30Φノーマル、約46G/50枚（暫定41.2〜47.5G）まで先行確認。
  - `ニューラッキージャックポット 7ver.` — 岡崎産業。HAZUSEで2018-01-22、型式`ニューラッキージャックポット／N1`、検定番号`7S0919`、設定別BIG/REGを先行確認。
- 年次カレンダー2系統でも1/22群は上記3機種。次回、メーカー別一覧/表記揺れ/別スペックを再監査して最古未処理をNo.1167として収集する。

## 継続注意事項
- **鬼若弁慶**は2017-12-04予定表記ではなく、HAZUSE/DMM等の実導入 **2018-02-19** で正式回収する。
- `イミソーレXX` exact dayは新しい決定的資料が出た場合のみ追補。月単位No.1159として既回収。
- ノーマル/A+RT機ではRT内部状態や成立済みボーナスの設定変更/純電断挙動を一般論から埋めない。
- 同シリーズ旧機種の朝一情報を転記しない。今回コードギアスR2本編とC.C.ver.を明確に分離した。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1165 / No.1166を再取得。
2. **1166件 / chronologicalFrontier 2018-01-09 / 1/9群CLOSED** を正本として継続。
3. 2018-01-10〜1/21の地域差・別スペックを短く境界監査。
4. **2018-01-22群**をメーカー別一覧・複数カレンダーで再監査し、最古未処理をNo.1167としてperformance core + resetBehavior v0.7収集。
5. 現時点1/22候補: **パチスロ烈火の炎 Flame of Recca / ヱヴァンゲリヲン30Φ / ニューラッキージャックポット 7ver.**。
6. 1/22群CLOSE後、次の日付群へ時系列前進。
7. 鬼若弁慶は2018-02-19群で正式回収。
8. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### コードギアスR2 C.C.ver.
- HAZUSE: https://hazuse.com/machine/pachislot/7S1251/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/50647/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_codegeass2cc/3/
- 一撃: https://1geki.jp/slot/s_codegeass2cc/
- スロがち: https://slogati.com/codegeass-cc/
- 4Gamerメーカー発表転載: https://www.4gamer.net/games/021/G002122/20180220020/

### 南国物語 TYPE-A
- HAZUSE: https://hazuse.com/machine/pachislot/7S1020/
- K-Navi: https://p-kn.com/slot/2924/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/49902/
- P-WORLD: https://www.p-world.co.jp/machine/database/8536
- パチマガスロマガ小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/136/c.php
- パチマガスロマガゲーム性: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/136/l.php
- スロがち: https://slogati.com/nangoku-a/
- 5号機クロニクル: https://5goki.com/heiwa-olympia

### 年次カレンダー / 次群
- 真パチスロ備忘録2018年一覧: https://sin-surobi.com/dounyubi/23041/
- 2-9伝説系導入カレンダー: https://29den.com/newslot/
- ニューラッキージャックポット HAZUSE: https://hazuse.com/machine/pachislot/7S0919/
- 烈火の炎 パチ7: https://pachiseven.jp/machines/5347/cutout/14
- ヱヴァンゲリヲン30Φ すろかい: https://slotkaiseki.hatenablog.com/entry/eve30
