更新日: 2026-09-09

## 現在地点
- recordCount: **1107**
- latestRecordAdded: **パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～**（オリンピア / 平和グループ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-18_girl-friend-kari-seiou-gakuen-memorial.md`
- chronologicalFrontier: **2017-07-18**
- frontierLatestMachine: **パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～ — No.1107**
- schema: **resetBehavior v0.7**
- status: **2017-07-18_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1106「パチスロ 聖闘士星矢 海皇覚醒」を再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1106件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN**。
- handoff指定の次機種 **「パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～」** をNo.1107として登録。
- 型式 `パチスロガールフレンド（仮）／G4` / 検定 `7S0436` / オリンピア / 2017-07-18をHAZUSE、業界記事、導入一覧で照合。
- performance coreとresetBehavior v0.7を同時収集。設定変更時GF COIN・日数カウンタは公開振り分けまで保存。

## No.1107 — パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～
- manufacturer: **オリンピア（平和グループ）**
- releaseDate: **2017-07-18**
- formalModelName: **パチスロガールフレンド（仮）／G4**
- certificationNumber: **7S0436**
- generation/system: **5号機（5.5号機） / ART特化 / 疑似ボーナス＋ゲーム数上乗せART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.7 / 98.8 / 100.2 / 103.4 / 108.3 / 116.2%**。
- GF TIME単独初当たり: **1/419.2 / 407.0 / 387.2 / 341.5 / 288.7 / 219.9**。
- GF BONUS単独初当たり: **1/597.7 / 572.7 / 516.1 / 432.2 / 474.2 / 390.6**。
- 初当たり合算: **1/244.6 / 236.3 / 219.8 / 189.8 / 178.5 / 140.1**。
- ベース: **46.1～47.7G/50枚**。
- 純増: **約1.8枚/G**。
- GF BONUS: **20G**。
- GF TIME: 比較主値 **50G+α**。HAZUSEは平均初期約60G、GF BONUS経由50G固定。別資料40G以上表記は定義差として保持。
- モード別最大天井: 通常/天国準備 **776G**、引き戻し **500G**、天国 **80G**。

### resetBehavior v0.7
- settingChange: **天井RESET/RESELECT、内部モードRESELECT、内部状態RESELECT、GF COIN再抽選、日数カウンタ再抽選**。
- carryOver / powerCycle: **天井進捗・内部モード・内部状態・GF COIN・日数カウンタCARRYOVER**。GF COIN液晶表示は見た目上0へ戻る。
- 設定変更時液晶: 解析上 **下駄箱ステージ / 1・3・5**。純電断時の正確な表示契約は当時資料に調査中が残るため確定判別へ使わない。
- 設定変更時GF COIN:
  - 50 **0.78%** / 1200 **3.52%** / 2350 **3.52%** / 3500 **3.52%** / 4650 **17.58%** / 5800 **23.83%** / 6950 **23.83%** / 8100 **23.44%**。
- 設定変更時日数カウンタ:
  - 11日目 **20.31%** / 28日目 **19.92%** / 45日目 **19.92%** / 62日目 **19.92%** / 79日目 **19.92%**。
- 設定変更後は実戦集計で401～550G当選率上昇があり、引き戻しモード優遇が推測される。ただし正式なモード振り分けは未公開のため **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更直後の4段階内部状態の具体振り分けも **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- deterministic machine-specific gakkun: **UNVERIFIED_AFTER_RESEARCH**。

### conflict / definition QA
- ART基本G数は P-WORLD **50G+α** / 期待値見える化 **40G以上** / HAZUSE **平均初期約60G（GF BONUS経由50G固定）**。基本・最低・平均の定義差を分離し、物差し主値は50G+α。
- メーカー表記は「オリンピア」「平和」「オリンピア・ゴールドオリンピア」の揺れあり。型式canonicalは **オリンピア**、平和グループを補助併記。

## 2017-07-18群 — OPEN
今回までの登録:
1. パチスロ 聖闘士星矢 海皇覚醒 — No.1106
2. パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～ — No.1107

未処理先行候補（個別処理時に導入日・型式・メーカーを再監査）:
1. 結城友奈は勇者である
2. ラグナロクサーガ
3. ワンバーワン-30
4. グレートキングハナハナ-30
5. トラッドサンダーブラック

### 次候補の境界注意
- 「パチスロ 結城友奈は勇者である」はパチビー/K-Navi/一撃が **2017-07-18導入**で一致する一方、現行DAXEL公式機種一覧には **2017.11** 表記がある。
- 次回はこの日付差を一次/当時資料まで再監査し、`CONFLICT` または「公式製品掲載月/別基準 vs ホール導入日」の定義差かを確定してからNo.1108登録可否を決める。公式表記だけを理由にキューから飛ばさない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_the-king-of-fighters.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-06_churahime-sun.md`。
- 今回は新規7/18群No.1107処理を優先し、遡及QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1107を再取得。
2. **1107件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN** を正本として継続。
3. 次の未処理 **「パチスロ 結城友奈は勇者である」** をNo.1108候補として、特に **2017-07-18 vs DAXEL公式2017.11** の日付差を再監査する。
4. 日付/同一機同定後、型式・検定番号・性能コア・resetBehavior v0.7を収集して登録。
5. 続いて **ラグナロクサーガ → ワンバーワン-30 → グレートキングハナハナ-30 → トラッドサンダーブラック** を順に処理。
6. 7/18群処理後、同日全メーカー横断監査を行って漏れを確認しCLOSED可否を判断。
7. 遡及QAは `2006-06_churahime-sun.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1107 パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～
- HAZUSE: https://hazuse.com/machine/pachislot/7S0436/
- HAZUSE AT/ART詳細: https://hazuse.com/machine/pachislot/7S0436/genre/209/
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/9317/greenbelt
- ALL7導入一覧: https://www.all7.jp/plans/index/2017/07/10
- 電撃オンライン: https://dengekionline.com/elem/000/001/560/1560061/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/8409
- スロパチネット: https://slopachi-net.com/girl-friend
- 期待値見える化: https://slotjin.com/zone/gfkari/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/38549/
- スロット解析情報~すろかい~: https://slotkaiseki.hatenablog.com/entry/girlfriend

### 次候補の日付QA
- パチビー: https://www.pachibee.jp/machines/about/217050011
- K-Navi: https://p-kn.com/slot/2790/
- 一撃: https://1geki.jp/slot/s_yuukiyuuna/
- DAXEL公式機種一覧: https://www.daxel.co.jp/products/
