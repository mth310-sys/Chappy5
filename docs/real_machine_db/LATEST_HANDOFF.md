# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは246件地点 / 2008-04-20 `クイージ` まで完了。
- 4/20同日残と4/21境界を再監査し、既存 `月光仮面（2008-04-06）` が238件目として既に収録済みであることも再確認。重複追加しない。
- 今回、KPE `ビートマニア / beatmania` を247件目として追加。
- 導入時系列の具体日前進地点は **2008-04-21（一部先行導入）**。通常導入は2008-05-07、当時発表の納品開始予定は2008-05-06で、定義を混ぜず併記。
- resetBehavior遡及QAは直前handoffどおり `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 247. ビートマニア / beatmania（KPE）

- record: `docs/real_machine_db/machines/2008-04-21_beatmania.md`
- commit: `67bd0b95896cd2de9196131b157d4b04bab24f47`
- modelName: `ビートマニアJA`
- releaseDate: `2008-04-21`
- releaseDateDefinition: 一部先行導入開始日
- regularIntroduction: `2008-05-07`
- announcedDeliveryStart: `2008-05-06`
- releaseDateConfidence: `INDUSTRY_PRIMARY_EXACT_ADVANCE_INTRODUCTION_DATE`
- systemType: ボーナス + AT + ART
- coreStatus: `PARTIAL_CORE_BASE_UNVERIFIED`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG: `1/390 / 1/379 / 1/352 / 1/334 / 1/315 / 1/303`。
- REG: `1/780 / 1/753 / 1/745 / 1/728 / 1/705 / 1/676`。
- 全ボーナス合成: `1/260 / 1/252 / 1/239 / 1/229 / 1/218 / 1/209`。
- 機械割: `98.3 / 99.9 / 103.1 / 105.7 / 108.7 / 111.0%`。当時攻略の丸め系列 `98 / 99 / 103 / 105 / 109 / 111%` と整合。
- BIG実獲得目安: 約270〜273枚。
- REG実獲得目安: 約50〜56枚。
- BIG後はART `RAVE TIME / レイブタイム` に100%突入、最大100G。通常時にはAT `TRANCE MODE / トランスモード` を搭載。
- 50枚ベースは `ビートマニア / beatmania / ビートマニアJA / KPE` と `50枚 / 1000円 / ベース / コイン持ち / 通常時小役` を変えて、当時業界、K-Navi、P-WORLD、旧攻略、後年DB、中古実機資料まで横断したが比較可能値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### CONFLICT

- `CONFLICT_ART_NET_INCREASE_0.3_VS_0.4`
  - 当時グリーンべると: 100Gで約30枚期待 → 約+0.3枚/G相当。
  - 旧実機販売DB: 約+0.3枚/G。
  - 当時攻略パチスロ救急車: 約+0.4枚/G。
  - 平均化しない。
- `CONFLICT_BIG_PAYOUT_THRESHOLD_350_OVER_VS_305_OVER`
  - K-Navi: BIGは350枚超払い出し終了。
  - P-WORLD: BIGは305枚超払い出し終了。
  - REGは70枚超払い出し終了で一致。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `NOT_APPLICABLE_NORMAL_CEILING_NONE_CONFIRMED`
- ceilingAfterReset: `NONE_NORMAL_CEILING_CONFIRMED_BY_OLD_ANALYSIS`
- modeAfterReset: `UNVERIFIED_AFTER_RESEARCH_AT_STATE`
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH_AT_ART_RT_STATE`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `NONE_CONFIRMED`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `NONE_CONFIRMED`

### resetBehavior調査要点

- `ビートマニア / beatmania / ビートマニアJA / KPE` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / レイブタイム / トランスモード / RT状態 / ART状態 / ガックン / 初期出目 / 天井` を組み替えて再探索。
- メーカー現存アーカイブ、当時グリーンべると/P-WORLD業界記事、K-Navi、P-WORLD機種DB、当時攻略サイト、旧実機DB・販売資料、後年回顧DBを横断。
- 通常時ゲーム数天井は旧攻略資料で「なし」と確認。
- 設定変更時のAT状態、ART/RT内部状態の初期化/引継ぎ、据え置き・電源OFF→ONとの差、本機固有ガックン/初期出目等は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用モード、設定変更専用恩恵/不利、公開朝一数値は `NONE_CONFIRMED`。
- 一般的なKPE/5号機挙動から推測補完しない。

## 今回の主要出典

取得日: 2026-09-01

### ビートマニア
- グリーンべると / P-WORLD業界ニュース「音ゲー『ビートマニア』をKPEがS機に」
  - https://news.p-world.co.jp/articles/2728/greenbelt
- グリーンべると / P-WORLD業界ニュース「ビートマニア段位認定キャンペーン開催」
  - https://news.p-world.co.jp/articles/2827/greenbelt
- コナミアミューズメント機種アーカイブ
  - https://www.konami.com/amusement/psm/archive/ps/2008/beatmania/
- K-Navi
  - https://p-kn.com/slot/796/
- P-WORLD
  - https://www.p-world.co.jp/machine/database/5138
- パチスロ救急車
  - https://www.eightbeat.com/slot99/kishu/ha_gyou/hi/beatmania/page_menu.html
- pachinko’s blog スペック整理
  - https://pachinko.hatenablog.jp/entry/2008/05/beatmania
- 中一商事 実機資料
  - https://www.nakaiti.com/html/sKpe051.html

## 重複防止

- 既存246件の再追加禁止。
- 247 `ビートマニア / beatmania` も再追加禁止。
- `ビートマニアJA` は247の型式名であり別レコード化しない。
- 4/21は一部先行導入、5/7は通常導入。5/7で同機を再追加しない。
- `月光仮面 / ゲッコウカメン2A` は238として既収録。4/6境界監査で再確認済み。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準247件地点 / 最初の実ホール導入確認日2008-04-21まで完了。**
2. **2008-04-22〜30の未処理5号機を境界監査する。月精度候補は具体日を再探索し、4月後半導入が確定するものがあれば時系列で差し込む。**
3. `シートラッド / シートラッド30（岡崎産業）` は2008年5月導入とする後年資料があるため、4月機と決め打ちしない。25φ/30φの独立型式・具体導入日・性能共通性を先に監査する。
4. ビートマニアは5/7通常導入でも再追加しない。
5. 4月後半に具体日根拠を持つ未処理がなければ、2008年5月の最古未処理機から前進する。
6. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
7. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
