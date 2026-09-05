# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **741**
- latestMachineAdded: **スナイパイ72**（ネット）
- latestRecord: `docs/real_machine_db/machines/2013-06-17_snipai72.md`
- chronologicalFrontier: **2013-06-17**
- frontierLatestExactDateMachine: **スナイパイ72**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-06-17_GROUP__NEXT_HELLO_SANTA_ULTIMATE_MACHINEGUN_THEN_SORA_NO_KISEKI**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-06-10_attack-no1-kaimaku-sekai-senshuken.md` を再読。
- INDEXは旧集約状態のため、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **740** / chronologicalFrontier **2013-06-10** / 06-10群CLOSED。
- K-Navi 2013年6月全国導入カレンダーで06-11～06-16に全国一斉導入のパチスロ追加がなく、次のアンカーを **2013-06-17** と再確認。
- 06-17群は **スナイパイ72 / ハローサンタ アルティメットマシンガンバージョン / パチスロ英雄伝説 空の軌跡 THE ANIMATION** の3機を確認。
- repo未登録確認後、**スナイパイ72**を741件目として追加。同日群は残り2機があるためOPEN。

## 今回追加 — スナイパイ72

### identity / 性能コア

- manufacturer: **ネット**。
- releaseDate: **2013-06-17**。K-Navi機種ページ、K-Naviカレンダー、HAZUSEで一致。
- systemType: **5号機 AT（ゲーム数上乗せ型）**。
- 機械割: **97.7 / 98.6 / 101.4 / 104.8 / 108.2 / 114.2%**。
- AT初当たり: **1/238 / 224 / 209 / 189 / 172 / 141**。
- AT「激走タイム」: **純増約2.9枚/G**。初期ゲーム数はパチマガ系で **平均40G（30G保障）**、P-WORLDの30G+α表記と整合する形で固定40Gとは扱わない。
- 通常時天井: **999G**。到達時は **継続率98%以上のOPT** 発動系。
- 50枚ベースは今回の高信頼直接値を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior v0.7

- パチ＆スロ必勝本の本機専用「天井&設定変更」で、設定変更時に **天井G数リセット / モード再抽選 / CZ抽選状態再抽選 / 液晶アジトor屋上=1:1 / ボーナス回数履歴リセット**を直接確認。
- gameCounterReset.settingChange: **CLEAR_CONFIRMED**。
- modeAfterReset: **RESELECT_CONFIRMED**。
- stateAfterReset: **CZ_STATE_RESELECT_CONFIRMED**。
- publicMorningNumbers: **アジト50% / 屋上50%**。
- 2013年当時別資料に設定変更時モード **通常A13 / 通常B76 / 天国10 / 超天国1%** があるが、他解析の通常A/通常B/スナイプ/バズーカという名称体系と一致しないため `CONFLICT_NAMING_OR_SOURCE_MODEL` として参考保持し、名称変換しない。
- 純据え置き時の999G進捗・モード/CZ状態、および設定変更を伴わない純電源OFF→ON契約は、語・資料系統を変えて再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- ガックン等の確定変更判別は `UNVERIFIED_AFTER_RESEARCH`。液晶初期ステージは `CHANGE_HINT_ONLY_NOT_DETERMINISTIC`。
- resetQaStatus: **RESEARCHED__SETTING_CHANGE_COUNTER_RESET_MODE_AND_CZ_STATE_RESELECT_CONFIRMED__CARRYOVER_POWER_CYCLE_UNVERIFIED_AFTER_RESEARCH**。

## 2013-06-17同日群 / 次境界

- K-Navi 2013年6月導入カレンダー上、06-17のパチスロは以下3機。
  - **スナイパイ72**（ネット）— 今回追加済み。
  - **ハローサンタ アルティメットマシンガンバージョン**（タイヨー）— 次対象。
  - **パチスロ英雄伝説 空の軌跡 THE ANIMATION**（ニューギン）— その次。
- よって06-17群は **OPEN**。残り2機を処理し、別系統でも同日漏れ監査後にCLOSED判定する。

## 遡及resetBehavior QA 進捗

- QA再開地点 `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md` は既にv0.7 `resetBehavior`収集済みであることを維持確認。既存性能側の状態は変更していない。
- 今回は本線741件目の確定・保存を優先し、空手バカ一代直後の「最初の実在resetBehavior欠損機」を安全に一意確定できていないため、QAカーソルは **空手バカ一代直後の実ファイル順**に維持。
- 次回はtree/実ファイル順で空手バカ一代の次から走査し、resetBehavior既収集機はスキップ、最初の欠損機のみ性能完了判定を崩さず補完する。

## 次回再開地点

1. **recordCount 741 / chronologicalFrontier 2013-06-17 / 06-17群OPEN** から開始。
2. **ハローサンタ アルティメットマシンガンバージョン**を742件目候補としてrepo重複確認 → 性能コア + resetBehavior v0.7を収集・保存。
3. 続けて **パチスロ英雄伝説 空の軌跡 THE ANIMATION**を処理し、06-17同日群を全メーカー横断監査してCLOSED判定。
4. 遡及QAは **空手バカ一代直後の実ファイル順**から再開。最初のresetBehavior欠損機を特定して補完。
5. スナイパイ72の据え置き/純電断契約、50枚ベースは後続QAで本機固有の直接資料が見つかった場合のみ補完。

## 主要出典 — 取得日 2026-09-06

### スナイパイ72

- K-Navi 機種トップ: `https://p-kn.com/slot/1855/`
- K-Navi 2013年6月全国導入カレンダー: `https://p-kn.com/calendar/201306/`
- HAZUSE: `https://data.hazuse.com/?genre=202&machine_code=3S0161`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7080`
- パチマガスロマガ 基本情報: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/156/a.php`
- パチマガスロマガ ATフロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/156/l.php`
- パチマガスロマガ 設定別AT初当たり・機械割: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/156/h.php`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2214/1/40426`
- 2013年当時スペック解析（設定変更時モード振分参考）: `https://ameblo.jp/kky-group/entry-11569216256.html`
- 2013年導入直前解析: `https://fiveslot777.com/archives/29285366.html`
- pacnk 後年設定判別整理: `https://pacnk.com/slot/tools/sh_snipai72.html`
