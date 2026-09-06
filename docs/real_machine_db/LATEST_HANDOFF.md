# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **748**
- latestMachineAdded: **ぱちスロAKB48**（京楽産業.）
- latestRecord: `docs/real_machine_db/machines/2013-07-16_pachislo-akb48.md`
- chronologicalFrontier: **2013-07-16**
- frontierLatestExactDateMachine: **ぱちスロAKB48**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-07-16_GROUP__NEXT_BOUNDARY_AUDIT_2013-07-17_TO_07-21__KNOWN_2013-07-22_PACHISLO_QP_ANCHOR**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-07-08_dragon-gal-shura-no-yabou.md` を再読。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **747** / chronologicalFrontier **2013-07-08** / 07-08群CLOSED。
- 2013-07-09～07-15境界を新台一覧・当時記事・機種DBで監査し、07-16より前の新たな未登録パチスロは今回確認できず。
- 前HANDOFFの次候補 **ぱちスロAKB48** はrepoに同名レコード未登録を確認し、性能コア+resetBehavior v0.7を収集して748件目として追加。
- 2013-07-16導入はK-Navi、パチビー、HAZUSE、後年機種DBで一致。当時グリーンべるとも7/16納品開始予定とする。
- 07-16同日群を当時新台一覧・機種DBで再監査し、今回AKB48以外の具体日付き未登録パチスロを確認できなかったため **CLOSED**。
- 次の具体日アンカーは **2013-07-22「パチスロQP」（オーイズミ）**。パチビーで2013-07-22導入を確認。次回は先に07-17～07-21境界を別系統でも監査する。

## 今回追加 — ぱちスロAKB48

### identity / 性能コア

- manufacturer: **京楽産業. / KYORAKU**。
- 型式名: **パチスロAKB48P** / 検定番号 **3S0240**。
- releaseDate: **2013-07-16**。
- generation/system: **5号機 ART / 疑似ボーナス+ゲーム数管理+自力CZ**。
- 機械割: **97.5 / 98.9 / 100.1 / 103.3 / 106.8 / 111.2%**。
- 疑似ボーナス合成: **1/243.4 / 211.3 / 236.5 / 198.1 / 203.2 / 164.2**。
- ART「神曲RUSH」初当たり: **1/472.9 / 412.1 / 454.6 / 384.3 / 386.8 / 319.4**。
- baseGamesPer50: **31.3～31.6G/50枚**。パチマガスロマガの設定6実戦値31.9Gは定義を分離。
- 神曲RUSH: **約+2.0枚/G**。初期G数はoverture系で決定。
- 疑似ボーナス基本継続: 48G / 20G+α / 24Gの複数種。
- 通常時最大天井: **777G**。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- **設定変更時**: 規定ゲーム数再抽選、高確移行抽選。液晶G数はクリア。開始液晶はMUSIC UNIVERSE / GIRL ROCK! / パーティNIGHTのいずれか。推しメン再振り分け、ぱちログリセット。
- **電源OFF→ONのみ**: **内部規定ゲーム数KEEP / 内部状態KEEP**を本機専用解析で直接確認。一方で液晶G数表示はクリアし、開始液晶・推しメン・ぱちログの見た目契約は設定変更時と共通。
- よって典型的な据え置き+閉店電断では、内部天井進捗を宵越す一方、液晶表示Gは0へ戻る。
- 設定変更後の公開モード振り分け:
  - 通常A: **35.0 / 19.5 / 32.5 / 16.5 / 25.0 / 12.0%**
  - 通常B: **25.0 / 32.5 / 27.5 / 32.5 / 30.0 / 33.0%**
  - 天国A: **40.0 / 48.0 / 40.0 / 48.0 / 40.0 / 48.0%**
  - 天国B: **0 / 0 / 0 / 3.0 / 5.0 / 7.0%**
- 各モード天井: 通常A **777G** / 通常B **480G** / 天国A **128G** / 天国B **133G**。
- 設定変更時高確移行率: **奇数41.5% / 偶数33.6%**。
- 天国系合計は設定1→6で **40 / 48 / 40 / 51 / 45 / 55%**。天国Bは設定4以上のみ。
- **プレイヤー任意の「サプライズリセット」**は店側設定変更と別契約。専用リセットA/B/天国A/Bを持つため、レコード内で分離保存。
- ガックン等、本機固有の確定的リール変更判別は検索語を変えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBehaviorQA: **HIGH__DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_CONTRACT_WITH_PUBLIC_MODE_AND_STATE_NUMBERS**。

## 境界監査 2013-07-09～07-16

- 07-09～07-15: 今回の導入一覧・当時記事横断で新規未登録パチスロを確認せず。
- 07-16: **ぱちスロAKB48**を追加。
- 2013年7月機種一覧側でもAKB48 / QP / みんなのジャグラー / 大漁II / ドラゴンギャル / 忍魂弐などを照合し、みんなのジャグラー・大漁II・忍魂弐は07-01列として既存キュー側で処理済み扱い。
- 07-16同日群でAKB48以外の具体日付き未登録パチスロを今回確認できず、**2013-07-16群CLOSED**。

## 遡及resetBehavior QA 進捗

- QAカーソルは前HANDOFFどおり `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は時系列本線748件目追加と07-16群閉鎖を優先し、QAカーソル自体は進めていない。

## 次回再開地点

1. **recordCount 748 / chronologicalFrontier 2013-07-16 / 07-16群CLOSED** から開始。
2. **2013-07-17～07-21**をK-Navi / ALL7 / HAZUSE / パチビー / メーカー別一覧 / 当時業界記事で境界監査。
3. より古い未登録がなければ **2013-07-22「パチスロQP」（オーイズミ）**を749件目候補として性能コア + resetBehavior v0.7収集。
4. 07-22同日群はQPだけと決め打ちせず全メーカー横断監査し、同日未登録があれば時系列内で追加。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続。既存性能コアを無駄に再調査しない。

## 主要出典 — 取得日 2026-09-06

### ぱちスロAKB48

- グリーンべると 2013-05-30: `https://web-greenbelt.jp/00000890/`
- K-Navi: `https://p-kn.com/slot/1876/`
- K-Navi 小役/ベース: `https://p-kn.com/slot/1876/45088/`
- パチビー: `https://www.pachibee.jp/machines/index/213060003`
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0240/`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2234/1/40921`
- パチ＆スロ必勝本 モード移行率: `https://p.hisshobon.jp/machine/2234/1/41515`
- パチ＆スロ必勝本 1枚役/ベース: `https://p.hisshobon.jp/machine/2234/1/41104`
- パチマガスロマガ 小役確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/01/c.php`
- 2-9伝説: `https://29den.com/akb48/`
- CrankySeven: `https://crankyseven.com/akb48-pc.htm`
- 後年機種DB: `https://pachinavi.net/machines/akb48-1/`

### 次候補

- パチビー / パチスロQP: `https://www.pachibee.jp/movies/index/9600`
  - 2013-07-22導入、オーイズミ、5号機AT、純増約2.8枚/G。
