# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **571**
- latestMachineAdded: **ドラゴノーツ －ザ・レゾナンス－**（オリンピア / 2011-05-22納品開始予定）
- latestRecord: `docs/real_machine_db/machines/2011-05-22_dragonaut-the-resonance.md`
- chronologicalFrontier: **2011-05-22**
- frontierLatestExactDateMachine: **ドラゴノーツ －ザ・レゾナンス－**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、570前線レコード「ハネスロ リラックマ」を再取得して開始。
- `INDEX.md` は旧19件地点のため、README規約どおり最新 `LATEST_HANDOFF.md` と実machineレコードを進捗正本として使用。
- 2011-05-09は570「ハネスロ リラックマ」のホール導入日なので重複登録しない。
- 5/10〜5/21を当時業界記事・機種DB・導入資料で境界監査し、具体日を確認できた最古未登録として2011-05-22納品開始予定「ドラゴノーツ －ザ・レゾナンス－」を571件目へ追加。

## 今回追加 — 571 ドラゴノーツ －ザ・レゾナンス－

- メーカー: **オリンピア / 平和販売**
- 導入キー: **2011-05-22（納品開始予定）**
- 5号機 / **A+ART / CZ / 天井ART**
- 機械割: **97.9 / 99.8 / 102.1 / 105.1 / 108.9 / 114.2%**
- BB: **1/481.9（設定1）〜1/381.0（設定6）**
- RB: **1/728.2〜1/565.0**
- ボーナス合算: **1/290.0〜1/227.6**
- ART初当たり: **1/218.6〜1/142.6**
- 1000円ベース: **34.12 / 34.41 / 34.72 / 35.03 / 35.35 / 35.67G**
- ART「タナトス襲来モード」: **1セット40G / 約+1.0枚/G**
- 覚醒ZONE: **10G固定**
- BIG: **最大351枚** / REG: **約45枚**
- 通常天井: **ボーナス間1200G+α → 次回ボーナスまで継続するART**

### resetBehavior v0.7 — 571

- P-WORLD本機ページに **「設定変更時には高確率ゾーンの突入抽選が行われる」** と明記。設定変更が朝一内部状態へ直接影響することを確認。
- 設定変更時高確の具体振り分け・発生率は今回確定できず `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス間1200G+α天井の **設定変更時CLEAR/RETAIN**、据え置き時の保持範囲、単純電源OFF→ON、ARTストック等の扱いは表記揺れ・型式/メーカー/シリーズ名とreset系検索語を変え、P-WORLD、パチマガ、業界記事、旧解析/回顧資料を横断しても直接本文を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBenefits: **高確率ゾーン突入抽選あり**。ただし数値未確定。
- resetDetection: ガックン・初期出目・液晶ステージ等は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。

## 主要出典 — 571（取得日 2026-09-04）

- グリーンべると/P-WORLD: `https://news.p-world.co.jp/articles/4611/greenbelt`
  - 2011-05-22納品開始予定、性能端値、ART40G/+1.0枚、BIG351枚、REG45枚、CZ構造
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/6332`
  - 1200G+α天井、設定変更時の高確率ゾーン突入抽選、ART/ボーナス性能
- 娯楽産業: `https://www.goraku-sangyo.com/%E5%B9%B3%E5%92%8C%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%89%E3%83%A9%E3%82%B4%E3%83%8E%E3%83%BC%E3%83%84-%E3%82%B6%E3%83%BB%E3%83%AC%E3%82%BE%E3%83%8A/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/96/c.php`
  - 1000円ベース34.12〜35.67G
- 5号機クロニクル: `https://5goki.com/heiwa-olympia`
  - 設定別機械割全表

## 今回のGitHub更新

- 571: `docs/real_machine_db/machines/2011-05-22_dragonaut-the-resonance.md`
  - machine commit: `9a1a6349f0a06233e3f1c5d21f87e80dd0865906`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 571 / chronologicalFrontier 2011-05-22**。最新main README / mission / INDEX / LATEST_HANDOFF / 570・571レコードを再取得。
2. 2011-05-23以降を日付境界で監査し、同日群・5/24〜5/28に未登録5号機がないか確認する。
3. 現時点の強い後続アンカーは **2011-05-29「雀龍桜花」納品開始予定**、続いて **2011-05-30「バリスタゴルフ」ホール導入予定**。ただし5/23〜28の未処理機を飛ばさない。
4. 2011-05-25発表の「スカイラブ3」は6月導入群なので、5月時系列へ誤混入しない。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、資料系統を横断した後だけ残す。CONFLICTは平均しない。
