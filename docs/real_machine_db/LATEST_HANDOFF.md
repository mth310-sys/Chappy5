# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **885**
- latestRecordAdded: **めんそ～れ30**（エマ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-05-11_mensore-30.md`
- chronologicalFrontier: **2015-05-11**
- frontierLatestMachine: **めんそ～れ30**
- frontierRecord: `docs/real_machine_db/machines/2015-05-11_mensore-30.md`
- schema: **resetBehavior v0.7**
- status: **2015-05-11_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、旧 `LATEST_HANDOFF.md`、No.884 `2015-05-11_pachislot-god-eater.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **884件 / 2015-05-11 / GROUP_OPEN**。

## No.885 — めんそ～れ30

- record: `docs/real_machine_db/machines/2015-05-11_mensore-30.md`
- manufacturer: **エマ**
- releaseDate canonical: **2015-05-11**（exact dayは単一二次資料のため低信頼保持）
- generation: **5号機**
- systemType: **ノーマル / 完全告知 / 沖スロ / 技術介入**

### identity correction

- 旧handoffの候補名 **「めんそーれ2-30」** は、そのまま採用すると2007年機と衝突する。
- P-WORLD ID 7703、5号機クロニクル、pacnkの2015年機は **「めんそ～れ30」** で、BIG/REG・機械割が一致。
- P-WORLD ID 5063の **「めんそーれ2」** は2007年別機種（型式メンソーレ2H系、RT搭載、別スペック）。
- よって2015年機canonicalは **「めんそ～れ30」**。旧2007年機を2015年へ重複登録しない。

### 性能コア

- 機械割: **96.4 / 97.9 / 100.3 / 103.2 / 104.8 / 108.2%**。
- BIG: **1/239.2 / 237.4 / 235.7 / 234.1 / 232.4 / 230.8**。
- REG: **1/481.9 / 409.6 / 360.1 / 318.1 / 287.4 / 260.1**。
- 合算: **1/159.8 / 150.3 / 142.5 / 134.8 / 128.5 / 122.3**。
- BIG最大 **311枚**、REG最大 **111枚**。
- AT/ART非搭載。
- 50枚ベースは表記揺れ・メーカー名・50枚/1000円/千円/ベース/コイン持ちで再探索したが安全な明示値を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior v0.7

- 天井: **非搭載**。
- 設定変更専用の短縮天井: `NOT_APPLICABLE`。
- AT/ART/CZ用モード: `NOT_APPLICABLE`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 設定変更時の本機固有内部状態、据え置き時のボーナス後32Gクラッシュ条件、純電源OFF→ON、ガックン/初期出目等は検索語・資料系統を変えて再探索したが直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一般的な5号機ノーマル機の慣例から推定していない。
- ボーナス後32G限定の「クラッシュ演出」は **発生すればBIG確定の演出条件**。32G以内の当選保証・天井・朝一モードとは扱わない。

## source / definition control

- 2004年4号機「めんそーれ-30」のストック/スーパーモード情報は流用しない。
- 2007年5号機「めんそーれ2-30」のRT/ネオスーパーモード、合算約1/117.87〜1/103.04等は別機種で流用しない。
- 2015年機identity anchorは P-WORLD 7703 の **BIG 1/239.2〜1/230.8 / REG 1/481.9〜1/260.1 / 機械割96.4〜108.2%**。
- exact hall-start 2015-05-11は現時点で単一二次資料。月単位2015年5月は複数DB一致。

## 2015-05-11群監査

- **パチスロ ゴッドイーター** — 山佐 — No.884 — 登録済み。
- **めんそ～れ30** — エマ — No.885 — 登録済み。
- 「2015-05-11 / 5月11日 / パチスロ / 新台 / 導入」を複数検索し、同日未登録5号機の強い候補は今回追加確認できなかった。
- したがって **`2015-05-11_GROUP_CLOSED_FOR_CURRENT_RESEARCH`**。

## 次回再開地点

1. **recordCount 885 / chronologicalFrontier 2015-05-11 / GROUP_CLOSED** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / `2015-05-11_mensore-30.md` を再確認。
3. **2015-05-12〜05-24境界監査**を行い、具体日付き未登録5号機があれば先に処理。
4. 現時点の次の強いアンカーは **2015-05-25**。
5. 05-25群の既知候補:
   - ネット **「最胸伝奇 パイ遊記」** — K-Navi/PachiSeven/アプリ資料で2015-05-25。
   - SNKプレイモア **「ドラゴンギャル～双龍の闘い～」** — HAZUSE/当時解析で2015-05-25。
6. 05-25群では同日候補を全メーカー横断して時系列漏れを防ぐ。
7. exact release dateでは検定告示 / 発表 / 納品予定 / 地域先行 / 全国稼働 / 実ホール導入 / アプリ配信を分離する。
8. 欠損は表記揺れ・型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン/有利区間まで十分再探索した後だけ `UNVERIFIED_AFTER_RESEARCH`。
9. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 据え置き・純電断は本機固有資料なしに一般的5号機慣例から推定しない。
- 同名/近似名の旧機種を導入年月だけで流用しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### めんそ～れ30
- P-WORLD: https://www.p-world.co.jp/machine/database/7703
- 5号機クロニクル（エマ）: https://5goki.com/ema
- pacnk: https://pacnk.com/slot/tools/sh_mensore2015a.html
- 2015年新台一覧（exact day補助）: https://slotnews777.blog.fc2.com/blog-entry-2348.html
- 2007年別機種「めんそーれ2」除外確認: https://www.p-world.co.jp/machine/database/5063

### 次回05-25アンカー
- 最胸伝奇 パイ遊記 K-Navi: https://p-kn.com/slot/2254/
- 最胸伝奇 パイ遊記 PachiSeven: https://pachiseven.jp/machines/4482/cutout/78
- ドラゴンギャル～双龍の闘い～ HAZUSE: https://hazuse.com/machine/pachislot/4S1080/
