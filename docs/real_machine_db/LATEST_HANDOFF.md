更新日: 2026-09-09

## 現在地点
- recordCount: **1108**
- latestRecordAdded: **パチスロ 結城友奈は勇者である**（DAXEL）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-18_yuki-yuna-is-a-hero.md`
- chronologicalFrontier: **2017-07-18**
- frontierLatestMachine: **パチスロ 結城友奈は勇者である — No.1108**
- schema: **resetBehavior v0.7**
- status: **2017-07-18_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1107「パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～」を再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1107件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN**。
- handoff指定の次未処理 **「パチスロ 結城友奈は勇者である」** をNo.1108として登録。
- 型式 `結城友奈は勇者である／DE` / 検定 `6S1145` / DAXEL / 当時ホール導入2017-07-18をHAZUSE、パチビー、K-Navi、一撃で照合。
- DAXEL現行公式機種一覧の `2017.11` は複数当時資料の2017-07-18と競合するため、ホール導入日canonicalを2017-07-18とし、公式一覧月は `CONFLICT_RELEASE_DATE_CATALOG` として保持。
- performance coreとresetBehavior v0.7を同時収集。設定変更時の周期天井短縮、周期天井振り分け、周期救済G数、紡ぎの種初期ポイントまで公開朝一数値として保存。

## No.1108 — パチスロ 結城友奈は勇者である
- manufacturer: **DAXEL**
- releaseDate: **2017-07-18**
- formalModelName: **結城友奈は勇者である／DE**
- certificationNumber: **6S1145**
- generation/system: **5号機（5.5号機） / A+ART / 差枚数管理型ART / CZ・周期管理**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.5 / 99.4 / 100.3 / 103.6 / 106.7 / 110.5%**。
- 勇者RUSH初当たり: **1/365.3 / 342.7 / 319.6 / 305.9 / 289.0 / 256.6**。
- 勇者ボーナス: 全設定共通 **1/16384**。
- ベース: **約47.0～49.1G/50枚**。
- ART純増: **約2.0枚/G**。
- 勇者RUSH: **初期50枚以上+α**。
- 勇者ボーナス: 実獲得目安 **約154枚**、210枚超払い出しで終了。
- 通常天井: **ART間999G+α**、周期天井通常最大**10周期**。

### resetBehavior v0.7
- settingChange: **天井RESET / モードRESET / 状態RESET / 満開スルー回数RESET / 紡ぎの種ポイント再抽選**。
- 周期天井: 設定変更時 **最大10周期→最大7周期へ短縮**。
- 設定変更時周期天井振り分け: **1周期37.9 / 2周期2.0 / 3周期12.5 / 4周期2.0 / 5周期12.5 / 6周期2.0 / 7周期31.3%**。
- 設定変更時周期救済G数: **33G 0.4 / 70G 0.4 / 107G 0.8 / 144G 1.6 / 181G 6.3 / 218G 12.5 / 255G 78.1%**。
- 設定変更時紡ぎの種ポイント: **3pt 56.64 / 10pt 25.00 / 17pt 12.50 / 24pt 3.13 / 31pt 1.56 / 38pt 0.78 / 45pt 0.39%**。
- powerCycle: **天井ゲーム数 / モード / 状態 / 満開スルー回数CARRYOVER**。
- 据え置き専用の独立直接表は固定できず **UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH**。純電断引継ぎは一撃の直接表で確認。
- 純電断時の紡ぎの種ポイントは明示を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更直後の具体的モード振り分け・内部状態振り分けは十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- deterministic machine-specific gakkun/change detection: **UNVERIFIED_AFTER_RESEARCH**。

### conflict / definition QA
- releaseDate: HAZUSE/パチビー/K-Navi/一撃 **2017-07-18** vs DAXEL現行公式一覧 **2017.11**。当時ホール導入日をcanonical、公式一覧月をCONFLICT保持。
- ちょんぼりすたは同ページ冒頭で2017-07-18、本文表に2017-07-01が残るため内部矛盾。単独7/1値はcanonicalから除外。

## 2017-07-18群 — OPEN
今回までの登録:
1. パチスロ 聖闘士星矢 海皇覚醒 — No.1106
2. パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～ — No.1107
3. パチスロ 結城友奈は勇者である — No.1108

未処理先行候補（個別処理時に導入日・型式・メーカーを再監査）:
1. ラグナロクサーガ
2. ワンバーワン-30
3. グレートキングハナハナ-30
4. トラッドサンダーブラック

### 次候補先行確認
- 「ラグナロクサーガ」はALL7、パチビー、K-Navi、ちょんぼりすたが **2017-07-18導入**で一致。メーカーはメーシー。
- パチビー/業界記事でART純増約2.0枚/G、1セット60G以上、GOD系1/8192フラグとSEVEN RUSH系仕様を先行確認済み。次回に型式・検定番号・設定別機械割/初当たり・ベース・resetBehaviorを本調査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_the-king-of-fighters.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-06_churahime-sun.md`。
- 今回は新規7/18群No.1108処理を優先し、遡及QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1108を再取得。
2. **1108件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN** を正本として継続。
3. 次の未処理 **「ラグナロクサーガ」** をNo.1109候補として処理。
4. 型式・検定番号・性能コア・resetBehavior v0.7を収集し、欠損は資料系統変更後にのみUNVERIFIED。
5. 続いて **ワンバーワン-30 → グレートキングハナハナ-30 → トラッドサンダーブラック** を順に処理。
6. 7/18群処理後、同日全メーカー横断監査を行って漏れを確認しCLOSED可否を判断。
7. 遡及QAは `2006-06_churahime-sun.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1108 パチスロ 結城友奈は勇者である
- DAXEL公式機種一覧: https://www.daxel.co.jp/products/
- HAZUSE: https://hazuse.com/machine/pachislot/6S1145/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/6S1145/genre/207/
- パチビー: https://www.pachibee.jp/machines/about/217050011
- K-Navi: https://p-kn.com/slot/2790/
- 一撃: https://1geki.jp/slot/s_yuukiyuuna/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_yuukiyuuna/3/
- 一撃 小役/ベース: https://1geki.jp/slot/s_yuukiyuuna/4/
- 一撃 紡ぎの種: https://1geki.jp/slot/s_yuukiyuuna/45/
- 一撃 ART概要: https://1geki.jp/slot/s_yuukiyuuna/81/
- ちょんぼりすた: https://chonborista.com/slot/daxel-slot/37835/
- 期待値見える化: https://slotjin.com/zone/yuyuyu/

### 次候補 ラグナロクサーガ
- ALL7: https://www.all7.jp/plans/index/2017/07/10
- パチビー: https://www.pachibee.jp/machines/about/217060006
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/9428/greenbelt
- K-Navi: https://p-kn.com/slot/2833/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/40720/
