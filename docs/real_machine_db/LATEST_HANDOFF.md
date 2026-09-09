更新日: 2026-09-09

## 現在地点
- recordCount: **1087**
- latestRecordAdded: **ぱちスロ アベンジャーズ**（オッケー.）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-06-05_avengers.md`
- chronologicalFrontier: **2017-06-05**
- frontierLatestMachine: **ぱちスロ アベンジャーズ — No.1087**
- schema: **resetBehavior v0.7**
- status: **2017-05-23_TO_2017-06-04_BOUNDARY_CLOSED / 2017-06-05_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、既存レコードを再取得して開始。
- INDEX本文は旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- handoffはNo.1085「ツインエンジェルBREAK」のままだったが、実レコード上で **No.1086「パチスロ テイルズ オブ シンフォニア」** が既に存在することを検出。並行更新として受け入れ、重複登録を回避した。
- No.1086は `2017-06-05_tales-of-symphonia.md`。性能コア + resetBehavior v0.7まで収録済みであることを確認。
- 6/5群の次の未処理 **「ぱちスロ アベンジャーズ」** をNo.1087として登録。
- 遡及QAは `2006-05-15_looney-tunes-bia.md` を再探索。性能側 `status: PARTIAL` は維持し、reset QAのみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。

## No.1086 — パチスロ テイルズ オブ シンフォニア（並行更新確認）
- manufacturer: **北電子**
- releaseDate: **2017-06-05**
- formalModelName: **テイルズオブシンフォニア／KP**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**
- 機械割: **97.5 / 98.8 / 100.3 / 102.7 / 105.3 / 110.4%**。
- ART初当たり: **1/336.2 / 327.4 / 303.2 / 298.7 / 274.9 / 257.2**。
- ボーナス合算: **1/541.6 / 516.0 / 516.0 / 481.9 / 481.9 / 445.8**。
- ベース約**37G/50枚**、ART約**1.5枚/G**。
- 設定変更: 天井RESET、内部状態RESELECT、イセリア開始。
- 電源OFF→ON: 天井・内部状態CARRYOVER。
- 通常天井はボーナス・ART・CZ間967G+最大前兆32G（実質999G付近）、ART2セット確定。

## No.1087 — ぱちスロ アベンジャーズ
- manufacturer: **オッケー.**
- releaseDate: **2017-06-05**
- formalModelName: **パチスロアベンジャーズKB**
- certificationNumber: **7S0015**
- generation/system: **5号機 / 5.5号機 / ART / CZ / ボーナス非搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.6 / 98.9 / 101.1 / 104.9 / 108.1 / 112.4%**。
- ART初当たり: **1/476.9 / 468.0 / 450.7 / 425.2 / 395.2 / 358.4**。
- CZ: **1/182.8 / 178.9 / 173.5 / 161.2 / 144.7 / 131.7**。
- ベース: 代表値**45.8G/50枚**、設定差資料では**45.8〜47.1G/50枚**。
- ART「AVENGERS TIME」: **50G+α / 約2.0枚/G**。
- 通常天井: **ART間1200G + 約20G前兆**。

### resetBehavior v0.7
- 設定変更: **天井RESET**、初回のみ**869G+約20G前兆**へ短縮。
- 設定変更: 内部状態を**RESET/RESELECT**、液晶は**キャプテンアメリカステージ**。
- 設定変更時高確率:
  - 設定1〜3: **19.92%**
  - 設定5: **30.08%**
  - 設定4・6: **39.84%**
- 電源OFF→ON: **天井ゲーム数・内部状態CARRYOVER**、液晶はキャプテンアメリカステージ。
- 据え置き: 設定変更処理なしとして天井進捗・内部状態CARRYOVER相当。独立据え置き表は弱いため補助判断と明記。
- 設定変更/純電断とも同一開始ステージのため、開始ステージ単独では変更判別不可。
- 本機固有の確定ガックン/初期出目変更判別は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- `ルーニー・テューンズ バック・イン・アクション` は性能側 `status: PARTIAL` を維持。
- reset QAのみ **PARTIAL_RESEARCH_EXHAUSTED** へ更新。
- 200G/50G RT「ルーニーチャンス」の存在・性能は当時攻略資料2系統で確認済み。
- 設定変更/据え置き/純電断時のRT残G・内部RT状態、本機固有ガックン/初期出目は検索語・資料系統を変えた再探索でも直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的5号機挙動からRESET/CARRYOVERを推測補完しない。
- 次カーソル: `2006-05_the-king-of-fighters.md`。

## 2017-06-05群
- status: **OPEN**。
- 登録済み:
  1. パチスロ ツインエンジェルBREAK — No.1085
  2. パチスロ テイルズ オブ シンフォニア — No.1086
  3. ぱちスロ アベンジャーズ — No.1087
- 未処理確認済み候補:
  1. **パチスロ 信長の野望-創造- — EXCITE**
- 日付CONFLICT監査候補:
  - **ケロロ軍曹** — 2-9伝説は2017-06-05、K-Navi/2017導入122タイトルは2017-06-19。平均せず、6/5群CLOSE前に公式・業界・当時解析で再照合する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1087を再取得。
2. **1087件 / chronologicalFrontier 2017-06-05 / 6/5群OPEN** を正本として継続。
3. 次の未処理 **EXCITE「パチスロ 信長の野望-創造-」** をNo.1088候補として性能コア + resetBehavior v0.7で処理。
4. 6/5群CLOSE前に `ケロロ軍曹` の6/5 vs 6/19導入日CONFLICTを公式・業界・当時解析で再監査。
5. 遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1087 ぱちスロ アベンジャーズ
- HAZUSE: https://hazuse.com/machine/pachislot/7S0015/
- 一撃 基本: https://1geki.jp/slot/s_avengers/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_avengers/3/
- 一撃 状態移行: https://1geki.jp/slot/s_avengers/42/
- パチビー: https://www.pachibee.jp/machines/index/217050003
- パチ＆スロ必勝本 基本: https://p.hisshobon.jp/machine/2973/1/64022
- パチ＆スロ必勝本 狙いドコロ: https://p.hisshobon.jp/machine/2973/1/64557
- パチ＆スロ必勝本 小役/ベース: https://p.hisshobon.jp/machine/2973/1/64170
- K-Navi: https://p-kn.com/slot/2797/

### 遡及QA ルーニー・テューンズBIA
- P_Style777: https://ps777.net/data/looneytunes.htm
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/01/a.php
- グリーンべると: https://web-greenbelt.jp/00004642/
