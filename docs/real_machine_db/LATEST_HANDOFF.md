# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **899**
- latestRecordAdded: **イケイケマハロ-30**（北電子）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-07-21_ikeike-mahalo-30.md`
- chronologicalFrontier: **2015-07-21**
- frontierLatestMachine: **イケイケマハロ-30**
- frontierRecord: `docs/real_machine_db/machines/2015-07-21_ikeike-mahalo-30.md`
- schema: **resetBehavior v0.7**
- status: **2015-07-21_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.898 `2015-07-21_pachislot-mahou-shoujo-lyrical-nanoha.md` を再読。
- INDEXは19件時点の旧集約状態なので、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **898件 / 2015-07-21 / 07-21_GROUP_OPEN**。
- GitHub main は会話上の前回報告より先行しており、マイジャグラーIII→鬼神7→パチスロ魔法少女リリカルなのはまで既登録だったため重複追加せず、handoff指定の最初の未処理候補へ進んだ。

## No.899 — イケイケマハロ-30

- record: `docs/real_machine_db/machines/2015-07-21_ikeike-mahalo-30.md`
- manufacturer: **北電子**
- formalModelName: **イケイケマハロKD-30**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation: **5号機**
- systemType: **ノーマル / 完全告知 / 30Φ沖スロ**
- releaseDate: **2015-07-21**（K-Navi全国一斉導入開始）

### 性能コア

- BB: **1/294 / 291 / 279 / 266 / 251 / 230**。
- RB: **1/512 / 475 / 437 / 400 / 370 / 338**。
- 合算: **1/187 / 181 / 170 / 160 / 150 / 137**。
- 機械割/出玉率: **97.5 / 98.4 / 100.6 / 103.1 / 106.1 / 110.5%**。
- 上記は北電子公式製品ページの工場データ予測値で、P-WORLD・パチマガスロマガでも一致。
- BIG最大 **312枚**、REG最大 **130枚**。
- 50枚ベースは表記揺れ/型式/メーカー＋「50枚/1000円/千円/ベース/コイン持ち」を変更し、公式・P-WORLD・K-Navi・パチマガ・当時攻略・旧DB/中古実機資料まで再探索したが安全な明示G数を固定できず `UNVERIFIED_AFTER_RESEARCH`。小役から推定しない。

### resetBehavior v0.7

- ノーマルタイプでAT/ART/CZ・規定ゲーム数天井なし。
- `gameCounterReset` / `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**。
- `modeAfterReset`: AT/ART/CZ内部モードは **NOT_APPLICABLE_NORMAL_TYPE**。
- `stateAfterReset`: 高確/低確等のAT/ART抽選状態は **NOT_APPLICABLE_NORMAL_TYPE**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- BIG後77G以内にBIG成立するとプレミアムBGM条件があるが、設定変更/据え置き/純電断でこのカウンタを保持するかは本機固有資料を再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 告知音選択「ナルかも/ナルなる/し～ん」は遊技者選択表示であり、朝一当選率を左右す内部モードとは分離。
- 設定変更後の告知音選択初期値/保持も `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有の確定的ガックン・初期出目・ランプ等による変更判別は `NONE_CONFIRMED_AFTER_RESEARCH`。他のジャグラー/マハロ系の挙動を流用しない。
- リセット短縮天井、朝一高確保証、専用当選優遇率などは `NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH`。

### 品質管理

- 北電子公式・P-WORLD・パチマガの性能値にmaterial conflictなし。
- 正式型式は2015-05-27の検定通過業界記事で **イケイケマハロKD-30** を確認。
- 検定番号は警察/検定一覧・型式名検索を追加したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- K-Naviの2015-07-21全国一斉導入と地域先行を示す店舗資料はイベント定義/地域差なので平均・CONFLICT化せず分離保持。

## 2015-07-21群監査 — OPEN

処理済み:
1. **パチスロ魔法少女リリカルなのは** — 三洋物産 — No.898。
2. **イケイケマハロ-30** — 北電子 — No.899。

未処理の強い候補:
1. **めんそーれ-25 / めんそ～れ25Φ** — エマ。
   - ALL7: **導入予定2015-07-21**。
   - 5号機クロニクル: **25Φは2015/7**、30Φは2015/5。
   - 既存No.885は2015-05-11の30Φ版「めんそ～れ30」。25Φを30Φの重複として消さず、25Φ固有の正式型式/導入日/性能同一性/resetBehaviorを直接確認して独立登録可否を決定する。
2. 07/21同日群のメーカー横断漏れ監査。
   - K-Navi全国一斉導入カレンダーのパチスロは「なのは」「イケイケマハロ-30」。ALL7では別に「めんそーれ-25」が07/21予定。

## 次回再開地点

1. **recordCount 899 / chronologicalFrontier 2015-07-21 / 07-21_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.899を再確認。
3. **エマ「めんそーれ-25 / めんそ～れ25Φ」**を最優先。No.885の30Φ版と混同せず、25Φ固有資料で正式型式・exact release day・性能同一性・resetBehaviorを確認する。
4. 07/21同日群を最終監査して追加がなければCLOSED。
5. 次の強いK-Navi日付は **2015-07-27**。同日候補は **JPS「サマージャンボ ～あの夏のチケットの行方～」**。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 同名/近似名・25Φ/30Φ・前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- P-WORLDの最終更新日を導入日として採用しない。
- 検定告示 / 発表 / 納品予定 / 地域先行 / 全国実ホール導入を分離する。

## 主要出典 — 取得日 2026-09-07

### No.899 イケイケマハロ-30
- 北電子公式製品: https://www.kitadenshi.co.jp/slot/ikeikemahalo-30/
- 北電子公式アプリ: https://www.kitadenshi.co.jp/fun/apps/ikm30/
- K-Navi機種: https://p-kn.com/slot/2290/
- K-Navi 2015年7月導入カレンダー: https://p-kn.com/calendar/201507/
- P-WORLD: https://www.p-world.co.jp/machine/database/7752
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/97/h.php
- パチマガスロマガ 概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/97/a.php
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/10461/
- P-MEDIA 検定通過記事: https://p-media.info/3%E4%BD%9C%E7%9B%AE%E3%81%AE%E3%83%9E%E3%83%8F%E3%83%AD%E3%81%AF%E3%80%8C%E3%82%A4%E3%82%B1%E3%82%A4%E3%82%B1%E3%80%8D%E3%81%A7%EF%BC%8F%E3%82%A4%E3%82%B1%E3%82%A4%E3%82%B1%E3%83%9E%E3%83%8F%E3%83%AD/

### 次回候補 めんそーれ-25
- ALL7 2015年7月: https://www.all7.jp/plans/index/2015/07
- 5号機クロニクル エマ一覧: https://5goki.com/ema
