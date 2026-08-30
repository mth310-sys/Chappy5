# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- INDEX本体は19件時点だが、LATEST_HANDOFF優先ルールにより、その後追加済みレコードを含めて継続。
- 前引継ぎで2006年5月監査完了・LATEST_HANDOFF基準28件まで進行済み。
- 今回は2006年6月候補を規格監査し、5号機3機種を新規登録。
- **LATEST_HANDOFF基準の収録数は31件。2006年6月監査は完了扱い。**

## 今回追加

### `machines/2006-06_churahime-sun.md`

- ちゅら姫SUN（エレコ）
- 2006年6月 / 5号機初期 / 沖縄系ノーマル / 1・6の2段階設定
- メーカー公式でBIG約333枚、CHURA CHANCE約238枚
- パチマガスロマガでボーナス合成 設定1 1/217.01、設定6 1/192.75
- 1000円（50枚）あたり設定1 34.11G、設定6 34.49G
- 5号機クロニクルで機械割 設定1 97.2%、設定6 103.1%
- 設定別BIG / CHURA CHANCE単独確率のみ未確定
- 後年一覧の「REG約104枚」は公式/当時資料のCHURA CHANCE約238枚と食い違うため採用せずconflictsに記録
- status: `PARTIAL`

### `machines/2006-06_thunderbirds-neo-xx.md`

- サンダーバードNEOXX（藤商事）
- 2006年6月 / 5号機初期 / 2種BIG + RT
- HAZUSE当時解析で設定別SBIG/NBIG確率を取得
- 機械割 91.0〜110.0%
- SBIGは466枚超払い出し終了・純増約360枚・終了後50G RT
- NBIGは346枚超払い出し終了・純増約270枚
- 50枚ベースとRT純増/Gは未確定
- 設定1機械割91.0%は極端な値のため、後続QAで別資料照合を優先
- status: `PARTIAL`

### `machines/2006-06_lord-of-the-rings.md`

- ロード・オブ・ザ・リング（ビスティ）
- メーカー公式導入年月 2006.06 / 型式名 フィーバーロード・オブ・ザ・リングS
- 5号機初期 / BIG + CB
- 設定別BIG 1/344.9〜1/262.1
- 設定別CB 1/689.8〜1/541.6
- 合成 1/229.9〜1/176.6
- 機械割 95.3〜109.1%
- BIG平均純増約308枚、CB純増238枚固定
- 50枚ベースは未確定
- 導入月はメーカー公式2006-06に対しHAZUSE見出し2006-07の差があるためCONFLICTとして保持
- status: `PARTIAL`

## 2006年6月 規格監査完了

前引継ぎに挙がっていた候補5機種を規格確認した。

### 5号機本線 — 今回収録
- ちゅら姫SUN（エレコ）
- サンダーバードNEOXX（藤商事）
- ロード・オブ・ザ・リング（ビスティ）

### 4号機系 — 5号機本線へ入れない
- サイボーグ009SP（アビリット） — 4号機。2006年6月機として当時回顧・機種資料で確認
- 秘宝伝（大都技研） — 4.7号機 / AタイプST。大都技研公式でも5号機第一弾は翌2007年6月SHAKEIIと明記

2006年は4号機末期と5号機初期が混在するため、年表上の同月機種を規格確認せず本線へ入れない方針を継続する。

## 次回再開地点

**2006年7月へ進む。7月の年表・メーカー別5号機一覧・当時業界/攻略資料を突き合わせ、まず全候補の4号機/5号機規格を監査し、最古の未処理5号機から収集する。**

特に2006年7月は4号機「北斗の拳SE」など大型末期機と5号機初期機が併売された時期なので、機種名だけで判断せず規格確認を最優先する。

## 今回の主要資料

- ユニバーサル公式 ちゅら姫SUN
  - https://www.universal-777.com/product/slot/churahime_sun/
- パチマガスロマガ ちゅら姫SUN
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/a.php
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/c.php
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/i.php
- 5号機クロニクル ユニバーサル系一覧
  - https://5goki.com/universal
- HAZUSE サンダーバードNEOXX
  - https://www.hazuse.com/i/data/thunderbirds/top.htm
- SANKYOオンライン博物館 ロード・オブ・ザ・リング
  - https://www.sankyo-fever.jp/collection/860/
- HAZUSE ロード・オブ・ザ・リング
  - https://www.hazuse.com/i/data/lord_of_the_ring/top.htm
- P_Style777 秘宝伝
  - https://ps777.net/data/hihouden.htm
- 大都技研 スロット製品一覧
  - https://www.daitogiken.com/products/slot/

次の作業者は README.md → ミッションv0.6 → INDEX.md → 本LATEST_HANDOFF.md → 既存machines の順に確認し、INDEXより本ファイルが新しい場合は本引継ぎを優先して重複せず続行すること。
